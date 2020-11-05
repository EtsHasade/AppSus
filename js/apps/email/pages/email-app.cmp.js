'use strict';

// import emailList from '../cmps/email-list.cmp'
//DATA MODEL:
//gEmails = [];


export default {
    name: 'emailApp',
    template: `
    <section class="email app-container">
        <div class="bar-container">
            <!-- <editor-bar></editor-bar> -->
            Main
        </div>
        <div class="main-app-container">
            <email-list></email-list>
            Email - List
        </div>
        <div class="side-bar-container">
            <!-- <filter-nav></filter-nav> -->
            fillter--email
        </div>
    </section>
    `,
    // components: {
    //     emailList
    // },
}