class StringService {
	replaceAll(string, search, replacement) {
		return string.replace(new RegExp(search, "g"), replacement);
	}
}

export default new StringService();
