import * as d3 from 'd3';
import HopChartService from '../../../../services/hop-chart-service';

class TopAxisRender {
	render(svg, xScale, valueFormatter) {
		var xAxis = d3.axisTop(xScale)
			.ticks(5)
			.tickFormat(valueFormatter);

		svg.append("g")
			.attr("class", "x-axis")
			// todo figure out a better place for this 20
			.attr("transform", "translate(0,20)")
			.call(xAxis);
	}
}

export default new TopAxisRender();