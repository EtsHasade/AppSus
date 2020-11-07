'use strict';

import { utilsService } from "../../../services/utils-service.js";
import { eventBus } from "../../../services/eventBus-service.js";
import { emailService } from "../services/email-services.js";

export default {
    name: 'email-compose',
    props: ['email'],
    template: `
        <section class="email-compose">
            <div>new email messege</div>
            <form @submit.prevent="submiton">
                <input type="text" placeholder="To:" v-model:value="compose.to" > 
                <input type="text" placeholder="Subject:" v-model:value="compose.subject">
                <textarea class="compose-body" rows="6" cols="50" placeholder="email-text:" v-model:value="compose.body"></textarea>
                <input type="submit" value="Send mail">
                <button>
                 <router-link to="/email">Go back</router-link>
                </button>

                
            </form>
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
                from: 'userName',
                date: '',
                isTrash: false,
                isStarred: false
            },
        }
    },
    created() {
        if (email) this.compose = email;
        // this.compose = this.$route.params
        this.compose.id = utilsService.makeId();
        console.log('email id:', this.compose.id);
        eventBus.$on('email-sent', (email) => {
            this.$nextTick(() => {
                this.compose.to = email.from;
            })
        })
    },
    methods: {
        submiton() {
            console.log(this.compose)
            eventBus.$emit('sending the new mail', this.compose)
            this.compose.date = utilsService.getDate();
            console.log(this.compose)
            emailService.addMail(this.compose)
        },

    },
}