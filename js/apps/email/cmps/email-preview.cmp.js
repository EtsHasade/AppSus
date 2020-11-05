'use strict';


import { eventBus } from '../../../services/eventBus-service.js';
import { emailService } from '../services/email-services.js';
// add import lont-txt from global-cmps


export default {
    name: 'email-preview',
    props: ['mail'],
    template: `
        <section @click="selectedPreview" class="email-preview" :class="{ unReadMail: !mail.isread}">
           <div  class="flex space-between align-center ">
         
            <div>
                {{mail.title}}
                <div class="email-shows">
                    {{mail.from}}
                    <email-short-text :txtLimit="30" :txt="mail.subtitle"></email-short-text>
                </div>
             </div>
            <div class="email-shows" >
                    {{mail.time}}
                    {{mail.date}}
                    <button class="stars" @click.stop="starringMail" v-if="!mail.isStarred">&star;</button>
                    <button class="yellow-stars" @click.stop="starringMail" v-else>&starf;</button>
            </div>
            </div>
            <div class="sub-title-perview" v-if="selected">
                <button @click="onDeleteMail"><i class="fas fa-trash-alt"></i></button>
                <button @click="onDeleteMail"><i class="fas fa-business-time"></i></button>
                <!-- <button @click="makeNote"><i class="far fa-clipboard"></i></button> -->
                <!-- add: ^^remind me later^^ + open new page with the mail -->
                <!-- <router-link :to="'________'+mail.id"><button @click="read"> <i class="fas fa-envelope-open"></i> </button></router-link> -->
                <long-text :txtLimit="100" :txt="mail.subtitle"></long-text>

            </div>
        </section>
    `,
    data() {
        return {
            selected: false,
            isStarred: this.mail.isStarred
        }
    },
    methods: {
        read() {
            eventBus.$emit('read', this.mail.id);

        },
        onDeleteMail() {
            eventBus.$emit('Confirm', 'Are you sure you to delete?', this.deleteMail);
        },
        selectedPreview() {
            this.selected = !this.selected;
        },
        deleteMail() {
            this.mail.trash = !this.mail.trash;
            console.log(this.mail.id);
            eventBus.$emit('delete', this.mail.id);
        },
        starringMail() {
            eventBus.$emit('starring', this.mail.id);
        },
    },
    components: {
        longText,
    }
}