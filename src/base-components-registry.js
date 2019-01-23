const req = require.context('./base-components', true, /.vue$/);

const baseComponentRegistry = req.keys().reduce((sum, filename) => {
	const component = req(filename).default;
	return {
		...sum,
		[component.name]: component,
	};
}, {});

export default baseComponentRegistry;