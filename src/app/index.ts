import {createApp} from "vue";
import Main from "./component/app/app.vue";
import Store from './scripts/store';

const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

const app = createApp(Main);
app
	.use(Store)
	.mount('#app');

