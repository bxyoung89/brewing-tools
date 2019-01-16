import * as d3 from 'd3';
import HopChartService from '../../../../services/hop-chart-service';
import CenterLineRenderer from './center-line-renderer';
import TopAxisRenderer from './top-axis-renderer';
import BubbleRenderer from './bubble-renderer';

class ChartRenderer {
	async render({id, maxValue, valueFormatter, hops, valueFunction}) {
		const domSVG = document.getElementById(id);
		domSVG.innerHTML = "";
		const width = domSVG.clientWidth;
		const height = domSVG.clientHeight;

		const svg = d3.select(`#${id}`);

		const xScale = HopChartService.getXScale(maxValue, width);


		const mappedData = hops.map(hop => ({...hop, x: valueFunction(hop)})).sort((a, b) => b.x - a.x);
		const filteredData = mappedData.filter(hop => hop.x !== 0);
		const processedData = HopChartService.getYValuesForData(filteredData, xScale);


		CenterLineRenderer.render(svg, xScale, height);
		TopAxisRenderer.render(svg, xScale, valueFormatter);
		BubbleRenderer.render(svg, xScale, processedData, height);
	}
}

export default new ChartRenderer();