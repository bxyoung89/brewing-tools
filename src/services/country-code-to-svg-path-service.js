const countryCodeToSvgPath = {
	"NZ": 'flag-icons/264-new-zealand.svg',
	"US": 'flag-icons/264-united-states.svg',
	"BE": 'flag-icons/264-belgium.svg',
	"CA": 'flag-icons/264-canada.svg',
	"FI": 'flag-icons/264-finland.svg',
	"DE": 'flag-icons/264-germany.svg',
	"UK": 'flag-icons/264-united-kingdom.svg',
	"IE": 'flag-icons/264-ireland.svg',
};

class CountryCodeToSVGPathService {
	getSvgPath(countryCode){
		return countryCodeToSvgPath[countryCode] || 'flag-icons/unknown-country.svg';
	}
}

export default new CountryCodeToSVGPathService();