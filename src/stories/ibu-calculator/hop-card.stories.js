import { storiesOf } from "@storybook/vue";
import HopCard from "../../pages/ibu-calculator/components/hop-card.vue";

storiesOf("IBU Calculator/Hop Card", module)
	.add("single item", () => ({
		components: { HopCard },
		template: "<hop-card index='0' :hop='hop' numberOfCards='1' v-on:changed='value => this.hop = value' ></hop-card>",
		data: () => ({
			hop: {
				name: "",
				averageAlphaAcidPercentage: 0,
				boilTime: 60,
				isWholeHop: false,
				ounces: 0,
			},
		}),
	}))
	.add("second item", () => ({
		components: { HopCard },
		template: "<hop-card index='0' :hop='hop' numberOfCards='2' ></hop-card>",
		data: () => ({
			hop: {
				name: "",
				averageAlphaAcidPercentage: 0,
				boilTime: 60,
				isWholeHop: false,
				ounces: 0,
			},
		}),
	}))
	.add("title row one item", () => ({
		components: { HopCard },
		template: "<hop-card  numberOfCards='1' ></hop-card>",
	}))
	.add("title row more than one item", () => ({
		components: { HopCard },
		template: "<hop-card  numberOfCards='2' ></hop-card>",
	}));
