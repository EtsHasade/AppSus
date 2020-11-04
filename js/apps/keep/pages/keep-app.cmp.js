'use strict';
import { notesService } from "../services/notesService.js";

export default {
    template: `
    <section class="keep app-container">
        <div class="bar-container">
            editBar
            <!-- <editor-bar></editor-bar> -->
        </div>
        <div class="main-app-container">
            <!-- <note-list></note-list> -->
            noteList
            <ul>
                <li v-for="note in notesToShow">{{note.info.label}}</li>
            </ul>
        </div>
        <div class="side-bar-container">
            filterNav
            <!-- <filter-nav></filter-nav> -->
        </div>
    </section>
    `,
    data(){
        return {
            notes: []
        }
    },
    computed:{
        notesToShow(){
            return this.notes
        }
    },
    created(){
        this.notes = notesService.getNotes()
    }
}


//todo cmp keep-app:
// lyout  -V
// editor bar cmp
    // btn add txt-note cmp
    //...

// side filter-nav cmp
    // render tag list [{icon,title,tagTerm},...]


//note-list cmp - main grid container:
    // render *****note-preview dynamic-cmp**** from array of cmp-types+content = computed: noteToShow = gNotes ⊇ filterBy(filterNav)

    // txt-note cmp GOT info emit delete 