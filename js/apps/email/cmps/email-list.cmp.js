'use strict';

//create cmp of email list
import emailPreview from './email-preview.cmp.js'

export default {
    name: 'email-list',
    props: ['mails'],
    template: `
        <ul class="mail-list">
            <!-- <li v-for="mail in mails" :key="mail.id"> -->
            <email-preview v-for="mail in mails" :key="mail.id" :mail="mail"></email-preview>
            <!-- </li> -->
        </ul>
    `,
    components: {
        emailPreview,
    }
}