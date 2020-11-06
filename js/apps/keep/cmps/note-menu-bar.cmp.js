'use strict';
import { eventBus } from '../../../services/eventBus-service.js'
import { notesService } from '../services/notesService.js';


export default {
    name: 'noteMenuBar',
    props: ['note'],
    template: `
    <section class="note-menu-bar">  
            <!-- <button >Shere</button> -->
            <button @click="deleteNote">Delete</button>
            <label class="color-picker-label">
                <input type="color" class="color-picker" @input="chouseColor" v-model:value="BGColor">
            </label>
    </section>
    `,

    data() {
        return {
            isSelected: false,
            BGColor: this.note.style.backgroundColor
        }
    },
    created(){

    },
    methods: {
        deleteNote() {
            notesService.deleteNoteById(this.note.id);
        },
        emitSaveNoteChanges() {
            console.log('text: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
        chouseColor() {
            this.note.style.backgroundColor = this.BGColor;
            this.emitSaveNoteChanges()
        }
    }

}