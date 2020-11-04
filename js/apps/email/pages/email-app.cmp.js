'use strict';


//DATA MODEL:
//gEmails = [];


export default {
    template: `
    <section class="app-container">
        <div class="bar-container">
            <!-- <editor-bar></editor-bar> -->
            Main
        </div>
        <div class="main-app-container">
            <!-- <note-list></note-list> -->
            Email - List
        </div>
        <div class="side-bar-container">
            <!-- <filter-nav></filter-nav> -->
            fillter--email
        </div>
    </section>
    `,
}
//todo cmp email-app:
// lyout
// editor bar cmp
// btn add email cmp


// side filter-nav cmp - read/unread/ bin?/tag?
// render tag list  משותף


//email-list cmp - main grid container:
// render *****email-preview-cmp**** from array of cmp-types+content = computed: emailToShow = gEmail ⊇ filterBy(filterNav)

// email-editor