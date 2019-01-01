import { storiesOf } from "@storybook/vue";
import AppButton from "../base-components/app-button.vue";

storiesOf("App Button", module)
	.add("white-button", () => ({
		components: { AppButton },
		template: "<app-button>Hello World!</app-button>",
	}))
	.add("red-button", () => ({
		components: { AppButton },
		template: "<app-button theme=\"red\">Hello World!</app-button>",
	}))
	.add("light-blue-button", () => ({
		components: { AppButton },
		template: "<app-button theme=\"light-blue\">Hello World!</app-button>",
	}))
	.add("blue-button", () => ({
		components: { AppButton },
		template: "<app-button theme=\"blue\">Hello World!</app-button>",
	}))
	.add("dark-blue", () => ({
		components: { AppButton },
		template: "<app-button theme=\"dark-blue\">Hello World!</app-button>",
	}));
