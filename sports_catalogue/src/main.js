import { createApp} from 'vue'
import App from './App.vue';
import * as VueRouter from 'vue-router'
import CreateSportEvent from './components/CreateSportEvent.vue'
import CreateBookEvent from './components/CreateBookEvent.vue'

import './assets/main.css'

const router=VueRouter.createRouter({
    history:VueRouter.createWebHistory(),
    routes:[
        {
            path:"/event/sports",
            name:"CreateSportEvent",
            component:CreateSportEvent
        },
        {
            path:"/event/books",
            name:"CreateBookEvent",
            component:CreateBookEvent
        }
    ]
})



const app = createApp(App)


app.use(router).mount("#app");
