'use strict';

import emailList from '../cmps/email-list.cmp.js';
import emailSideBar from '../cmps/email-side-bar.cmp.js'
//DATA MODEL:
//gEmails = [];


export default {
    name: 'emailApp',
    template: `
    <section class="email app-container">
        <div class="main-app-container">
            <!-- rander mails list -->
            <router-view></router-view>
        </div>

        <div class="side-bar-container">
            <email-Side-Bar></email-Side-Bar>
        </div>
    </section>
    `,

    components: {
        emailList,
        emailSideBar
    },
}