'use strict';
import {notesService} from "../services/notesService.js";
import notesList from '../cmps/notes-list.cmp.js';
import editorBar from '../cmps/editor-bar.cmp.js';
import {eventBus} from '../../../services/eventBus-service.js'

export default {
    name: 'keepApp',
    template: `
    <section class="keep app-container">
        <div class="bar-container">
            <editor-bar></editor-bar>
        </div>
        <div class="main-app-container">
            <notes-list :notes="notesToShow"></notes-list>
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
        },
        
    },
    components:{
        notesList,
        editorBar
    },
    created(){
        this.notes = notesService.getNotes();
        
        eventBus.$on('saveNote',(evValue) =>{
            notesService.addOrUpdateNote(evValue);
             this.notes = notesService.getNotes();
        })
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