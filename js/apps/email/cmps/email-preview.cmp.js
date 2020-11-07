'use strict';


import { eventBus } from '../../../services/eventBus-service.js';
import { emailService } from '../services/email-services.js';
import longText from '../../../cmps/long-text.cmp.js'

export default {
    name: 'email-preview',
    props: ['mail'],
    template: `
        <li @click="selectedPreview" class="email-preview" :class="{ unReadMail: !mail.isread}">
           <div class="mail-preview-details">  
                <div>
                    <h4 class="email-shows" >
                        {{mail.from}}
                    </h4>
                </div>
                <div class="email-shows" >
                    <long-text :txtLimit="100" :txt="mail.body"></long-text>
                    <!-- {{mail.body}} -->
                    {{mail.date}}
                    <!-- <button class="stars" @click.stop="starringMail" v-if="!mail.isStarred">&star;</button>
                    <button class="yellow-stars" @click.stop="starringMail" v-else>&starf;</button> -->
                    <div class="stars" @click.stop="starringMail" v-if="!mail.isStarred"><i class="far fa-star"></i></div>
                    <div class="yellow-stars" @click.stop="starringMail" v-else><i class="fas fa-star"></i></div>
                </div>
               
            </div>
            <div class="mail-perview-btns" v-if="selected">
                <div @click="onDeleteMail"><i class="fas fa-trash-alt"></i></div>
                <div @click="onRemindMail"><i class="fas fa-business-time"></i></div>
                <!-- <button @click="makeNote"><i class="far fa-clipboard"></i></button> -->
                <!-- add: ^^remind me later^^ + open new page with the mail -->
                <!-- <router-link :to="'________'+mail.id"><button @click="read"> <i class="fas fa-envelope-open"></i> </button></router-link> -->
            </div>
        </li>
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
            eventBus.$emit('Confirm', 'Are you sure to delete this mail?', this.deleteMail());

        },
        onRemindMail() {
            eventBus.$emit('Remind you this mail later', this.remindMail());
        },
        selectedPreview() {
            this.selected = !this.selected;
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
        starringMail() {
            eventBus.$emit('marking mail', this.mail.id);
            console.log('star befor: ', this.mail.isStarred);
            this.mail.isStarred = !this.mail.isStarred;
            console.log('star after: ', this.mail.isStarred);
        },
        makeNote() {
            // conect to note app
        },
    },
    components: {
        longText,
    }
}