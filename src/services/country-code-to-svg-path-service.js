const countryCodeToSvgPath = {
	"Germany": 'flag-icons/264-germany.svg',
	"German": 'flag-icons/264-germany.svg',
	"Alemanha": 'flag-icons/264-germany.svg',
	"US": 'flag-icons/264-united-states.svg',
	"American": 'flag-icons/264-united-states.svg',
	"United Kingdom": 'flag-icons/264-united-kingdom.svg',
	"UK": 'flag-icons/264-united-kingdom.svg',
	"Belgium": 'flag-icons/264-belgium.svg',
	"Belgian": 'flag-icons/264-belgium.svg',
	"Canada": 'flag-icons/264-canada.svg',
	"France": 'flag-icons/264-france.svg',
};

class CountryCodeToSVGPathService {
	getSvgPath(countryCode){
		return countryCodeToSvgPath[countryCode] || '/brewing-tools/images/flag-icons/unknown-country.svg';
	}
}

export default new CountryCodeToSVGPathService();