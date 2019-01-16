import HopChartService from '../../../../services/hop-chart-service';

class BubbleRenderer {
	render(svg, xScale, data, height) {
		const middleOfSVG = (height - HopChartService.CENTER_LINE_HEIGHT) / 2;
		const group = svg.append("g")
			.attr("class", "bubbles")
			.attr("transform", `translate(0, ${middleOfSVG})`);

		// todo make this flags
		// todo try to make this so you add once hop at a time.
		// right now the "offset" sucks because it has to be an iterative process.
		group.selectAll('circle')
			.data(data)
			.enter()
			.append("circle")
			.attr('r', HopChartService.BUBBLE_SIZE)
			.attr('cx', d => xScale(d.x))
			.attr('cy', d => d.y)
			.attr('data-name', d => d.name);
	}
}

export default new BubbleRenderer();