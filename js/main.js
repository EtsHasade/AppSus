'use strict';
import {myRouter} from './routers.js'
import appHeader from "./cmps/app-header.cmp.js";



var app = new Vue({
    el: '#app',
    router: myRouter,
    components:{
        appHeader
    },
    template: `
    <section class="main-container">
        <app-header></app-header>
        <router-view></router-view>
    </section>
    `
})