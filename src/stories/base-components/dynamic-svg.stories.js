import { storiesOf } from "@storybook/vue";
import CountryCodeToSvgPathService from "../../services/country-code-to-svg-path-service";

storiesOf("Base Components/Dynamic Svg", module)
	.add("static", () => ({
		template: "<dynamic-svg src=\"discount.svg\"></dynamic-svg>",
	}))
	.add("switching", () => ({
		data: () => ({
			country: "BE",
		}),
		template: "<div><div>{{svgPath}}</div><dynamic-svg :src=\"svgPath\"></dynamic-svg></div>",
		mounted() {
			setInterval(() => {
				this.country = this.country === "BE" ? "US" : "BE";
			}, 1000);
		},
		computed: {
			svgPath() {
				return CountryCodeToSvgPathService.getSvgPath(this.country);
			},
		},
	}));
