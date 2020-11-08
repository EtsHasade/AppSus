'use strict';
export default {
    name: 'email-side-bar',
    template: `
        <section class='email-side-bar'> 
            <button class="btn new-mail">
                <router-link to="email/compose">Compose</router-link>
            </button>
            <button class="btn favorites-mails">
                <router-link to="email/favorites">Favorites</router-link>
            </button>
            <button class="btn inbox-mails">
                <router-link to="email/Inbox">Inbox</router-link>
            </button>
            <button class="btn sent-mails">
                <router-link to="email/Sent">Sent</router-link>
            </button>
            <!-- <button class="btn snoozed-mails">
                <router-link to="email/Snoozed">Snoozed</router-link>
            </button> -->
        </section> 
    `,
}