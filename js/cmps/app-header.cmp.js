'use strict';
// import {eventBus} from '../services/eventBus-service.js';
// import userMsg from './user-msg.cmp.js'
// eventBus.$on('user-msg',()=>{
//     console.log('user-msg!');
// })



export default {
    template:`
        <section class="header-app">
            <div class="logo">
                <h1 class="logo"><router-link to="/">Lost legends</router-link></h1>
            </div>
            <nav class="main-nav">
                <router-link to="/">Home page</router-link>
                <!-- <router-link to="/book">books App</router-link>
                <router-link to="/about">About us</router-link> -->
            </nav>
    </section>
    `,
    components:{
    },
    created(){

    }
}

