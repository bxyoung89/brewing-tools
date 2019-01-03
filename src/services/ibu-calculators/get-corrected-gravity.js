export default (gravity) => {
	if (gravity <= 1.05) {
		return gravity;
	}
	return 1 + (gravity - 1.05) / 2;
};
