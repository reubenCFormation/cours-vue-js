import { createApp} from 'vue'
import App from './App.vue';
import * as VueRouter from 'vue-router'

import EventCreator from "./components/EventCreator.vue"

import './assets/main.css'

const router=VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes:[
        {
            path:"/event",
            name:"EventCreator",
            component:EventCreator
        },
    ]
})



const app = createApp(App)


app.use(router).mount("#app");
app.mount('app');
