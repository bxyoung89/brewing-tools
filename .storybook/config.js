import { configure } from '@storybook/vue';
import Vue from "vue";
import VueSelect from "vue-select";
import "../src/style.scss";
import BaseComponentsRegistry from "../src/base-components-registry";

Vue.component("v-select", VueSelect.VueSelect);
Object.keys(BaseComponentsRegistry).forEach((componentTag) => {
  Vue.component(componentTag, BaseComponentsRegistry[componentTag]);
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
