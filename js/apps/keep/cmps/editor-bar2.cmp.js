'use strict';

import { notesService } from "../services/notesService.js";
import {eventBus} from '../../../services/eventBus-service.js'
import composeNote from './compose-note.cmp.js'


export default {
    name: 'editorBar2',
    template: `
        <section class="editor-bar">
            <div class="action-btns-container">
                <button class="btn txt" @click="addNote('noteText')" >+<i class="fas fa-sticky-note"></i></button>
                <button class="btn todo" @click="addNote('noteToDo')" >+<i class="fas fa-list-alt"></i></button>
                <button class="btn" @click="addNote('noteImg')" >+<i class="fas fa-file-image"></i></button>
                <!-- <button class="btn" @click="addNote('noteVidoe')" >+<i class="fas fa-file-video"></i></button> -->
            </div>
            <compose-note v-if="newNote" :type="newNote"></compose-note>            
        </section>
    `,
    components: {
        composeNote
    },
    data() {
        return {
            newNote: null
        }
    },
    methods:{
        addNote(type) {
           this.newNote = notesService.createNote(type);
           console.log("addNote -> this.newNote", this.newNote)
           
           this.newNote.info.label = 'your msg';
        //    this.emitSaveNoteChanges()
        },
        emitSaveNoteChanges() {
            console.log('text: this.note', this.newNote);
            eventBus.$emit('saveNote', this.newNote)
        },
    }
}
