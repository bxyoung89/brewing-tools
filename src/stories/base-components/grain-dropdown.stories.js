import { storiesOf } from "@storybook/vue";

storiesOf("Base Components/Grain Dropdown", module)
	.add("default", () => ({
		template: "<grain-dropdown :grain='grain'></grain-dropdown>",
		data: () => ({
			grain: undefined,
		}),
	}));
