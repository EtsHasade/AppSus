'use strict';

//create cmp of email list
import emailPreview from './email-preview.cmp.js';
import { emailService } from '../services/email-services.js'


export default {
    name: 'email-sent',
    template: `
        <ul class="mail-list">
            <email-preview v-for="mail in mails" v-if="mail.from !== 'puki'" :key="mail.id" :mail="mail"></email-preview>
            <div class="btn go-back">
                    <router-link to="/email">Go back</router-link>
            </div>
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