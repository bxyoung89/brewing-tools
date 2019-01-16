import * as d3 from 'd3';

class HopChartService {
	constructor() {
		this.CHART_PADDING = 50;
		this.BUBBLE_SIZE = 20;
		this.CENTER_LINE_HEIGHT = 5;
		this.SPACE_BETWEEN_BUBBLES = 5;
	}

	getXScale(maxValue, width) {
		return d3.scaleLinear().domain([0, maxValue]).range([this.CHART_PADDING, width - this.CHART_PADDING]);
	}

	getQuadtree(xScale) {
		return d3.quadtree()
			.x(d => xScale(d.x))
			.y(() => 0)
			// originally was xScale(-1) xScale(2)
			.extent([[xScale.range()[0], 0], [xScale.range()[1], 0]]);
	}

	findNeighbors(quadtree, scaledX, xScale) {
		return new Promise((resolve) => {
			if(quadtree.size() === 0){
				resolve([]);
				return;
			}
			const neighbors = [];
			// todo figure out a not nasty way of doing this.
			let doneTimeout;
			const setDoneTimeout = () => {
				if(doneTimeout){
					clearTimeout(doneTimeout);
				}
				doneTimeout = setTimeout(() => {
					resolve(neighbors);
				}, 100);
			};
			quadtree.visitAfter((node) => {
				const {data} = node;
				let scaledPointX = Number.POSITIVE_INFINITY;
				if (data) {
					let overlap = false;
					scaledPointX = xScale(data.x);
					if (scaledPointX < scaledX) {
						overlap = scaledPointX + this.BUBBLE_SIZE + this.SPACE_BETWEEN_BUBBLES >= scaledX - this.BUBBLE_SIZE - this.SPACE_BETWEEN_BUBBLES;
					} else {
						overlap = scaledX + this.BUBBLE_SIZE + this.SPACE_BETWEEN_BUBBLES >= scaledPointX - this.BUBBLE_SIZE - this.SPACE_BETWEEN_BUBBLES;
					}
					if (overlap) {
						neighbors.push(data);
					}
				}

				// const farAway = (x1 -this.BUBBLE_SIZE > scaledX + this.BUBBLE_SIZE + this.SPACE_BETWEEN_BUBBLES) && (scaledPointX + this.BUBBLE_SIZE < scaledX - this.BUBBLE_SIZE - this.SPACE_BETWEEN_BUBBLES);
				setDoneTimeout();
				// return farAway;
			});
		});
	}

	calculateOffset(d, quadtree, xScale) {
		return new Promise((resolve) => {
			const scaledX = xScale(d.x);
			this.findNeighbors(quadtree, scaledX, xScale).then((neighbors) => {
				if (neighbors.length === 0) {
					resolve(0);
					return;
				}

				const hypoteneuse = (this.BUBBLE_SIZE * 2) + this.SPACE_BETWEEN_BUBBLES;

				const occupied = [];
				neighbors.forEach((neighbor) => {
					const horizontalDistanceBetweenCenters = scaledX - xScale(neighbor.x);
					const verticalDistanceBetweenCenters = Math.sqrt(hypoteneuse ** 2 - horizontalDistanceBetweenCenters ** 2);
					occupied.push({
						bottom: neighbor.offset + verticalDistanceBetweenCenters,
						top: neighbor.offset - verticalDistanceBetweenCenters
					});
				});

				occupied.sort((a, b) => b.bottom - a.bottom);
				const {lowestValue, highestValue} = occupied.reduce(({lowestValue, highestValue}, occupiedItem) => {
					if (lowestValue > occupiedItem.bottom) {
						return {
							highestValue: Math.min(lowestValue, occupiedItem.bottom),
							lowestValue: occupiedItem.top,
						};
					}
					return {
						lowestValue: Math.min(lowestValue, occupiedItem.top),
						highestValue,
					}
				}, {
					lowestValue: Number.POSITIVE_INFINITY,
					highestValue: Number.POSITIVE_INFINITY,
				});

				const betterToGoHigher = Math.abs(highestValue) < Math.abs(lowestValue);
				const offset = betterToGoHigher ? highestValue : lowestValue;
				resolve(offset);
			});


		});

	}
}

export default new HopChartService();