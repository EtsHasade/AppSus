'use strict';

import { utilsService } from "../../../services/utils-service.js";
import { eventBus } from "../../../services/eventBus-service.js";
import { emailService } from "../services/email-services.js";

export default {
    name: 'email-compose',
    props: ['email'],
    template: `
        <section class="email-compose">
            <!-- <div>new email messege</div> -->
            <!-- <form @submit.prevent="submiton"> -->
            <form>
                <div class="mail-to-subject">
                    <input type="text" placeholder="To:" v-model:value="compose.to" > 
                    <input type="text" placeholder="Subject:" v-model:value="compose.subject">
                </div>
                <div class="mail-compose-body">
                    <textarea class="compose-body" rows="6" cols="44" placeholder="Email-text:" v-model:value="compose.body"></textarea>
                </div>
                    <!-- <input type="submit" value="Send mail"> -->
                <div @click="submiton" class="btn send-mail">
                    <router-link to="/email">Send mail</router-link>
                </div>
                <div class="btn go-back">
                    <router-link to="/email">Go back</router-link>
                </div>
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
        // if (email) this.compose = email;
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