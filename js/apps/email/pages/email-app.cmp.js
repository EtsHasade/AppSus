'use strict';

import emailList from '../cmps/email-list.cmp.js'
import { emailService } from '../services/email-services.js'
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
            <email-list :mails = "mails"></email-list>
            <router-view></router-view>
            Email - List
        </div>
        <div class="side-bar-container">
            <!-- <filter-nav></filter-nav> -->
            fillter--email
        </div>
    </section>
    `,
    data() {
        return {
            mails: [],
        }
    },
    created() {
        this.mails = emailService.getMails();
    },
    components: {
        emailList
    },
}