'use strict';
import { eventBus } from '../../../services/eventBus-service.js'
import { notesService } from '../services/notesService.js';


export default {
    name: 'noteMenuBar',
    props: ['note'],
    template: `
    <section class="note-menu-bar">  
            <!-- <button >Shere</button> -->
            <!-- <button @click="deleteNote">Delete</button> -->
            <button class="btn" @click="deleteNote"><i class="fas fa-trash-alt"></i></button class="btn">
            <button @click="pinningNote"  ><i class="fas fa-thumbtack"></i></button>
            <label class="color-picker-label">
                <i class="fas fa-palette" style="color: #000000;"></i>
                <input type="color" class="color-picker" @input="chouseColor" v-model:value="BGColor" style="visibility: hidden; width: 0">
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
        this.BGColor = this.note.style.backgroundColor
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
        },
        pinningNote() {
            this.note.isPinned = !this.note.isPinned;
            this.note.style.order = (this.note.isPinned)? -999 : 0;
            this.emitSaveNoteChanges()
        }
    }

}