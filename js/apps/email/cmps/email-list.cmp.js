'use strict';

//create cmp of email list
import emailPreview from './email-preview.cmp.js';
import { emailService } from '../services/email-services.js'


export default {
    name: 'email-list',
    template: `
        <ul class="mail-list">
            <!-- <li v-for="mail in mails" :key="mail.id"> -->
            <router-link to="email/compose">new Email</router-link>
            <email-preview v-for="mail in mails" :key="mail.id" :mail="mail"></email-preview>
            <!-- </li> -->
        </ul>
    
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
        emailPreview,
    }
}