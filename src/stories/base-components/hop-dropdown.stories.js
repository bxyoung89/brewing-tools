import { storiesOf } from "@storybook/vue";

storiesOf("Base Components/Hop Dropdown", module)
	.add("default", () => ({
		template: "<hop-dropdown v-model='hop'></hop-dropdown>",
		data: () => ({
			hop: undefined,
		}),
	}));
