import { storiesOf } from "@storybook/vue";

storiesOf("Base Components/X Button", module)
	.add("default", () => ({
		template: `<x-button :click="() => alert('cool!')"></x-button>`,
	}));