import HopChartService from '../../../../services/hop-chart-service';

class CenterLineRenderer {
	render(svg, xScale, height) {
		const middleOfSVG = (height - HopChartService.CENTER_LINE_HEIGHT) / 2;
		svg.append("line")
			.attr("class", "center-line")
			.attr("stroke-width", HopChartService.CENTER_LINE_HEIGHT)
			.attr("x1", xScale.range()[0])
			.attr("x2", xScale.range()[1])
			.attr("y1", middleOfSVG)
			.attr("y2", middleOfSVG);
	}
}

export default new CenterLineRenderer();