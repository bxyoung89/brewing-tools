import * as d3 from 'd3';
import HopChartService from '../../../../services/hop-chart-service';
import CenterLineRenderer from './center-line-renderer';
import TopAxisRenderer from './top-axis-renderer';
import BubbleRenderer from './bubble-renderer';

class ChartRenderer {
	async render({id, maxValue, valueFormatter, hops, valueFunction}) {
		const domSVG = document.getElementById(id);
		const width = domSVG.clientWidth;
		const height = domSVG.clientHeight;

		const svg = d3.select(`#${id}`);

		const xScale = HopChartService.getXScale(maxValue, width);


		const mappedData = hops.map(hop => ({...hop, x: valueFunction(hop)})).sort((a, b) => b.x - a.x);
		let twoPointData = [
			mappedData[0],
			mappedData[1],
			mappedData[2],
			mappedData[3],
			mappedData[4],
			mappedData[5],
		];
		// twoPointData = mappedData;
		const quadtree = HopChartService.getQuadtree(xScale);


		await this.updateQuadtree(twoPointData, quadtree, xScale);
		CenterLineRenderer.render(svg, xScale, height);
		TopAxisRenderer.render(svg, xScale, valueFormatter);
		BubbleRenderer.render(svg, xScale, twoPointData, height, quadtree);
	}

	async updateQuadtree(data, quadtree, xScale) {
		for (let datum of data) {
			await this.processDatum(datum, quadtree, xScale);
		}
	}

	processDatum(datum, quadtree, xScale) {
		return new Promise((resolve) => {
			HopChartService.calculateOffset(datum, quadtree, xScale).then((offset) => {
				datum.offset = offset;
				quadtree.add(datum);
				resolve();
			});
		});
	}
}

export default new ChartRenderer();