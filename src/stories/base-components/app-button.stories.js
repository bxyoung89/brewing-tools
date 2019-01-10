import { storiesOf } from "@storybook/vue";

storiesOf("Base Components/App Button", module)
	.add("white-button", () => ({
		template: "<app-button>Hello World!</app-button>",
	}))
	.add("red-button", () => ({
		template: "<app-button theme=\"red\">Hello World!</app-button>",
	}))
	.add("light-blue-button", () => ({
		template: "<app-button theme=\"light-blue\">Hello World!</app-button>",
	}))
	.add("blue-button", () => ({
		template: "<app-button theme=\"blue\">Hello World!</app-button>",
	}))
	.add("dark-blue", () => ({
		template: "<app-button theme=\"dark-blue\">Hello World!</app-button>",
	}));
