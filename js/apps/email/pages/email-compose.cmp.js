'use strict';

import utilsService from '../services/utils-service.js';

export default {
    name: 'email-compose',
    props: ['email'],
    template: `
        <section class="email-compose">
            <div class="email-title">Email compose</div>
            <form>
            <input placeholder="To:" v-model="compose.to" > 
            <input placeholder="Subject" v-model="compose.subject">
            <textarea class="compose-body" rows="6" cols="50" placeholder="email-text" v-model="compose.body"></textarea>
            </form>
            <button class="btn  btn-send-mail" @click="send">Send</button>
        </section> 
    `,
    data() {
        return {
            compose: {
                id: null,
                subject: '',
                body: '',
                isRead: false,
                to: '',
                from: '',
                date: '',
            },
        }
    },
    created() {
        this.composed.id = utilsService.makeId();
        console.log('email id:', this.composed.id);
        eventBus.$on('email-sent', (email) => {
            this.$nextTick(() => {
                this.compose.to = email.from;
            })
        })
    },
    methods: {
        send() {
            this.compose.date = utilsService.getDate();

        },

    },
}