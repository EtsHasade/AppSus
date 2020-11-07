'use strict';

import emailList from '../cmps/email-list.cmp.js'
//DATA MODEL:
//gEmails = [];


export default {
    name: 'emailApp',
    template: `
    <section class="email app-container">
        <div class="bar-container">
            <!-- <editor-bar></editor-bar> -->
            Main
        </div>
        <div class="main-app-container">
            <!-- <email-list :mails = "mails"></email-list> -->
            <router-view></router-view>
        </div>
        <div class="side-bar-container">
            <!-- <filter-nav></filter-nav> -->
            fillter--email
        </div>
    </section>
    `,

    components: {
        emailList
    },
}