'use strict';
import { eventBus } from "../../../services/eventBus-service.js";
import { emailService } from "../services/email-services.js";

export default {
    name: 'email-details',
    template: `
        <section class="mail-details" >
            <h3>{{mail.from}}</h3>
            <h5>{{mail.subject}}</h5>
            <section>{{mail.date}}</section>
            <p>{{mail.body}}</p>
            <button @click="reply"><router-link to="../pages/compose">reply mail</router-link></button>
            <button @click="onDeleteMail">🗑️<i class="fas fa-trash-alt"></i></button>
            <button @click="onRemindMail">⏲️<i class="fas fa-business-time"></i></button>
        </section>
    `,
    data() {
        return {
            mailId: this.$route.params.id,
        }
    },
    methods: {
        reply() {
            eventBus.$emit('reply', this.mail)
            console.log(this.mail)
        },
        read() {
            eventBus.$emit('read', this.mail.id);
        },
        onDeleteMail() {
            eventBus.$emit('Confirm', 'Are you sure you to delete this mail?', this.deleteMail());

        },
        onRemindMail() {
            eventBus.$emit('Remind you this mail later', this.remindMail());
        },
        deleteMail() {
            this.mail.trash = !this.mail.trash;
            console.log('delete mail by id: ', this.mail.id);
            emailService.deleteMailById(this.mail.id);
        },
        remindMail() {
            //add this mail to remind mail list
            console.log('remind Mail by id:', this.mail.id)
        },
    },
    computed: {
        mail() {
            return emailService.getMailById(this.mailId)
        }
    }

}