import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-vue-router";

storiesOf("Base Components/App Header", module)
	.addDecorator(StoryRouter())
	.add("header", () => ({
		template: "<app-header/>",
	}));
