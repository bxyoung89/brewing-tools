const countryCodeToSvgPath = {
	NZ: "flag-icons/264-new-zealand.svg",
	US: "flag-icons/264-united-states.svg",
	BE: "flag-icons/264-belgium.svg",
	CA: "flag-icons/264-canada.svg",
	FI: "flag-icons/264-finland.svg",
	DE: "flag-icons/264-germany.svg",
	UK: "flag-icons/264-united-kingdom.svg",
	IE: "flag-icons/264-ireland.svg",
	FR: "flag-icons/264-france.svg",
	CZ: "flag-icons/264-czech-republic.svg",
	AU: "flag-icons/264-australia.svg",
	SI: "flag-icons/264-slovenia.svg",
};

class CountryCodeToSVGPathService {
	getSvgPath(countryCode) {
		return countryCodeToSvgPath[countryCode] || this.getUnknownCountryFlag();
	}

	getUnknownCountryFlag() {
		return "flag-icons/unknown-country.svg";
	}
}

export default new CountryCodeToSVGPathService();
