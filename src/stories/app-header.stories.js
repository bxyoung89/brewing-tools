import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";
import AppHeader from "../base-components/app-header.vue";

storiesOf("App Header", module)
	.addDecorator(StoryRouter())
	.add("header", () => ({
		components: { AppHeader },
		template: "<app-header/>",
	}));
