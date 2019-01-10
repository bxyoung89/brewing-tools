class RegularExpressionService {
	escapeStringForRegularExpression(string) {
		return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
	}
}

export default new RegularExpressionService();
