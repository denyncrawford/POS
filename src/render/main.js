import { createApp } from 'vue'
import App from './App.vue'
import 'animate.css';
import './index.css'
import router from './router.js'
import store from './store.js'

// Icons

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { HiDotsVertical, RiUserFill } from 'oh-vue-icons/icons'
addIcons(HiDotsVertical, RiUserFill);

// App

const app = createApp(App)

app.component("Icon", OhVueIcon);
app.use(router)
app.use(store)
app.mount('#app')
