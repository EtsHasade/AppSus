'use strict';

// import { notesService } from "../services/notesService.js";
import { eventBus } from '../../../services/eventBus-service.js';
// import noteMenuBar from './note-menu-bar.cmp.js';


export default {
    name: 'noteText',
    props: ['note'],
    template: `
        <section class="note-text" @mouseover="isHover = true" @mouseout="isHover = false">
            <h2 ref="label" name="label" @blur="onSaveTxt('label')" class="note-title" contenteditable="true">{{info.label}}</h2>
            <!-- <p  ref="txt"  name="txt" @blur="onSaveTxt('txt')" contenteditable="true">{{info.txt}}</p> -->
            <textarea class="main-txt" ref="txt"  name="txt" @input="emitSaveNoteChanges" v-model:value="info.txt" cols="30" rows="10"></textarea>
            <!-- <note-menu-bar  :note="note"></note-menu-bar> -->
        </section>
    `,
    component:{
        // noteMenuBar
    },
    data() {
        return {
            info: null,
            isHover: false
        }
    },
    created() {
        this.info = this.note.info
    },
    methods: {
        saveNote() {
            this.$emit('saveNote', this.info)
        },
        emitSaveNoteChanges() {
            console.log('text: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
        onSaveTxt(fildName) {
            const elItem = this.$refs[fildName];
            console.log('elItem', elItem, 'refs', this.$refs[fildName]);
            this.note.info[fildName] = elItem.innerText;
            this.emitSaveNoteChanges()

        }
    }
}

// {
//     type: "NoteText",
//     isPinned: true,
//     info: {
//         label: 'fhhjj',
//         txt: "Fullstack Me Baby!"
//     },
//     style: {}
// }