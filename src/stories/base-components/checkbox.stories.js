import { storiesOf } from "@storybook/vue";

storiesOf("Base Components/Checkbox", module)
	.add("with attached label", () => ({
		template: "<checkbox v-model='checked'>Hello World!</checkbox>",
		data: () => ({ checked: true }),
	}))
	.add("no label but content after", () => ({
		template: "<div style='flex'><checkbox></checkbox><div>Hello World!</div></div>",
		data: () => ({ checked: false }),
	}));
