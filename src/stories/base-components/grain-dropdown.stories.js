import { storiesOf } from "@storybook/vue";

storiesOf("Base Components/Grain Dropdown", module)
	.add("default", () => ({
		template: "<grain-dropdown v-model='grain'></grain-dropdown>",
		data: () => ({
			grain: undefined,
		}),
	}));
