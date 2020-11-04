'use strict';


export default {
    template: `
    <section class="app-container">
        <div class="bar-container">
            <!-- <editor-bar></editor-bar> -->
            editBar
        </div>
        <div class="main-app-container">
            <!-- <note-list></note-list> -->
            noteList
        </div>
        <div class="side-bar-container">
            <!-- <filter-nav></filter-nav> -->
            filterNav
        </div>
    </section>
    `,
}


//todo cmp keep-app:
// lyout
// editor bar cmp
    // btn add txt-note cmp
    //...

// side filter-nav cmp
    // render tag list [{icon,title,tagTerm},...]


//note-list cmp - main grid container:
    // render *****note-preview dynamic-cmp**** from array of cmp-types+content = computed: noteToShow = gNotes ⊇ filterBy(filterNav)

    // txt-note cmp GOT info emit delete 