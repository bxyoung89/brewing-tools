import { storiesOf } from "@storybook/vue";
import GrainCard from "../../pages/lautering-calculator/components/grain-card.vue";

storiesOf("Lautering Calculator/Grain Card", module)
	.add("single item", () => ({
		components: { GrainCard },
		template: "<grain-card index='0' :grain='grain' numberOfCards='1' ></grain-card>",
		data: () => ({
			grain: {},
			pounds: 0,
		}),
	}))
	.add("second item", () => ({
		components: { GrainCard },
		template: "<grain-card index='1' :grain='grain' numberOfCards='2' ></grain-card>",
		data: () => ({
			grain: {},
			pounds: 0,
		}),
	}));
