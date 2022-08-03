import Vue from "vue"
import Router from "vue-router"

import HomeComp from "@/components/pages/HomeComp.vue"
import HowToBuy from "@/components/pages/HowToBuy.vue"
import NotFound from "@/components/NotFound.vue"
import MainAll from "@/components/pages/MainAll.vue"

Vue.use(Router)

const routes = [
    {
        path: '/',
        name: 'MainAll',
        component: MainAll,
        children: [
            {
                path: "/",
                component: HomeComp,
                name: "Home"
            },
            {
                path: "/howtobuy",
                component: HowToBuy,
                name: "howtobuy"
            }
        ]
    },
    {
        path: '/notfound',
        component: NotFound,
        name: "notfound404"
    }

]

const router = new Router({
    routes: routes,
    mode: "history",
    scrollBehavior: () => {
        return {
            x: 0,
            y: 0
        }
    }
})

export default router