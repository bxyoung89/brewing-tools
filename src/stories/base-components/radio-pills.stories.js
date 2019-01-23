import { storiesOf } from "@storybook/vue";

let selectedItem;

storiesOf("Base Components/Radio Pills", module)
	.add("default", () => ({
		template: "<radio-pills label-property='name' :on-item-selected='onItemSelected' :items='items' :selected-item='selectedItem' />",
		data: () => ({
			items: [{name: 'item 1'}, {name: 'item 3'}, {name: 'item 2'}],
			selectedItem,
			onItemSelected: item => {
				selectedItem = item;
			},
		}),
	}));
