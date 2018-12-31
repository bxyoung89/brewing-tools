import {storiesOf} from '@storybook/vue';
import AppHeader from '../base-components/app-header';
import StoryRouter from 'storybook-vue-router';

storiesOf('App Header', module)
	.addDecorator(StoryRouter())
	.add('header', () => ({
		components: {AppHeader},
		template: '<app-header/>',
	}));

