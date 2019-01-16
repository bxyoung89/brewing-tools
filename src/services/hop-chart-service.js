import * as d3 from 'd3';

class HopChartService {
	constructor() {
		this.CHART_PADDING = 50;
		this.BUBBLE_SIZE = 10;
		this.CENTER_LINE_HEIGHT = 5;
		this.SPACE_BETWEEN_BUBBLES = 5;
	}

	getXScale(maxValue, width) {
		return d3.scaleLinear().domain([0, maxValue]).range([this.CHART_PADDING, width - this.CHART_PADDING]);
	}

	getYValuesForData(data, xScale) {
		const processedData = [];
		let currentIndex = 0;
		while (processedData.length !== data.length) {
			const datumToProcess = data[currentIndex];
			const neighbors = this.findNeighbors(processedData, datumToProcess, xScale);
			datumToProcess.y = this.calculateY(datumToProcess, neighbors, xScale);
			processedData.push(datumToProcess);
			currentIndex += 1;
		}
		return processedData;
	}

	findNeighbors(possibleNeighbors, datumToFindNeighborFor, xScale) {
		return possibleNeighbors.filter(neighbor => {
			const neighborValue = xScale(neighbor.x);
			const myValue = xScale(datumToFindNeighborFor.x);
			if (neighborValue < myValue) {
				return neighborValue + this.BUBBLE_SIZE + this.SPACE_BETWEEN_BUBBLES >= myValue - this.BUBBLE_SIZE;
			} else {
				return myValue + this.BUBBLE_SIZE + this.SPACE_BETWEEN_BUBBLES >= neighborValue - this.BUBBLE_SIZE ;
			}
		});
	}

	calculateY(data, neighbors, xScale) {
		if (neighbors.length === 0) {
			return 0;
		}

		const hypoteneuse = (this.BUBBLE_SIZE * 2) + this.SPACE_BETWEEN_BUBBLES;

		const myValue = xScale(data.x);

		const occupied = [];
		neighbors.forEach((neighbor) => {
			const neighborValue = xScale(neighbor.x);
			const horizontalDistanceBetweenCenters = myValue - neighborValue;
			const verticalDistanceBetweenCenters = Math.sqrt(hypoteneuse ** 2 - horizontalDistanceBetweenCenters ** 2);
			occupied.push({
				bottom: neighbor.y + verticalDistanceBetweenCenters,
				top: neighbor.y - verticalDistanceBetweenCenters
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
		return betterToGoHigher ? highestValue : lowestValue;
	}
}

export default new HopChartService();