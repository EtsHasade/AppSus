'use strict';

import { notesService } from "../services/notesService.js";
import {eventBus} from '../../../services/eventBus-service.js'


export default {
    name: 'editorBar2',
    template: `
        <section class="editor-bar">
            <div class="action-btns-container">
                <button class="btn" @click="addNote('noteText')" >Text</button>
                <button class="btn" @click="addNote('noteToDo')" >ToDo</button>
                <button class="btn" @click="addNote('noteImg')" >Image</button>
                <button class="btn" @click="addNote('noteVidoe')" >Vidoe</button>
            </div>
            
        </section>
    `,
    components: {

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
           this.emitSaveNoteChanges()
        },
        emitSaveNoteChanges() {
            console.log('text: this.note', this.newNote);
            eventBus.$emit('saveNote', this.newNote)
        },
    }
}
