import './style.scss'
import {createApp} from "vue";
import Main from "./component/main/main.vue";

const container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

const app = createApp(Main);
app.mount('#app');

