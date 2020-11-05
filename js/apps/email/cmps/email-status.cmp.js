'use strict';
import { emailService } from "../services/email-services.js";

// cmp count how many read from the emails

export default {
    name: 'email-status',
    template: ``,
    data() {
        return {
            mailReaded: emailService.countReadMails()
        }
    },
    methods: {

    }

}