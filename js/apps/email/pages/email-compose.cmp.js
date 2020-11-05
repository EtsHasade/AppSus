'use strict';

import { utilsService } from "../../../services/utils-service.js";
import { eventBus } from "../../../services/eventBus-service.js"


export default {
    name: 'email-compose',
    props: ['email'],
    template: `
        <section class="email-compose">
            <div>new email messege</div>
            <form  @submit.prevent="submiton">
                <input type="text" ref="mailTo" placeholder="To:" v-model="compose.to" > 
                <input type="text" ref="mailSubject" placeholder="Subject:" v-model="compose.subject">
                <textarea ref="mailBody" class="compose-body" rows="6" cols="50" placeholder="email-text:" v-model="compose.body"></textarea>
                <input type="submit" value="send mail">
            </form>
            <!-- <button class="btn btn-send-mail" @click="send">Send</button> -->
        </section> 
    `,
    data() {
        return {
            compose: {
                // id: null,
                // subject: '',
                // body: '',
                // isRead: false,
                // to: '',
                // from: '',
                // date: '',
                // isTrash: '',
                // isFavorie: '',
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
        submiton() {
            console.log(this.newMail)
            eventBus.$emit('sending the new mail', this.newMail)
            this.compose.to = this.$refs.mailTo.value;
            this.compose.subject = this.$refs.mailSubject.value;
            this.compose.body = this.$refs.mailBody.value;
            this.compose.date = utilsService.getDate();
            console.log(this.newMail)

        },
        // send() {
        // },
    },
}