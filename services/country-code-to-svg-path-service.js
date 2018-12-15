const countryCodeToSvgPath = {
	"Germany": '/brewing-tools/images/flag-icons/264-germany.svg',
	"German": '/brewing-tools/images/flag-icons/264-germany.svg',
	"Alemanha": '/brewing-tools/images/flag-icons/264-germany.svg',
	"US": '/brewing-tools/images/flag-icons/264-united-states.svg',
	"American": '/brewing-tools/images/flag-icons/264-united-states.svg',
	"United Kingdom": '/brewing-tools/images/flag-icons/264-united-kingdom.svg',
	"UK": '/brewing-tools/images/flag-icons/264-united-kingdom.svg',
	"Belgium": '/brewing-tools/images/flag-icons/264-belgium.svg',
	"Belgian": '/brewing-tools/images/flag-icons/264-belgium.svg',
	"Canada": '/brewing-tools/images/flag-icons/264-canada.svg',
	"France": '/brewing-tools/images/flag-icons/264-france.svg',
};

class CountryCodeToSVGPathService {
	getSvgPath(countryCode){
		return countryCodeToSvgPath[countryCode] || '/brewing-tools/images/flag-icons/unknown-country.svg';
	}
}

export default new CountryCodeToSVGPathService();