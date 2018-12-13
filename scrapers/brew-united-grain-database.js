// for http://www.brewunited.com/grain_database.php#
(() => {
	let json = [];
	$('tr').each(
		(x, row) => {
			const jqueryRow = $(row);
			if(jqueryRow.attr('class') === 'headrow'){
				return;
			}
			const columns = jqueryRow.children();
			const rowData = {
				name: $(columns[0]).text(),
				origin: $(columns[1]).text(),
				color: Number.parseFloat($(columns[3]).text()),
				potential: Number.parseFloat($(columns[5]).text()),
			};
			json.push(rowData);
		});

	console.log(json);
}());