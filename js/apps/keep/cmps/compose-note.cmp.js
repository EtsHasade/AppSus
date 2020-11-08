'use strict';
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteToDo from './note-todo.cmp.js';
import noteVidoe from './note-vidoe.cmp.js';
import noteEmpty from './note-empty.cmp.js';
import noteMenuBar from './note-menu-bar.cmp.js';

import {eventBus} from '../../../services/eventBus-service.js'
import { notesService } from '../services/notesService.js';


export default {
    name: 'composeNote',
    props: ['note'],
    template:`
    <section  class="compose-note-container note-preview-container" >  
        <div class="screen" @click="deleteNote"></div>
        <component :is="note.type" class="compose-note note-preview" :class="{pinned: note.isPinned}" :note="note" ></component>
        <note-menu-bar :note="note"></note-menu-bar>
        <button @click.stop="saveAndClose" >Save</button>
    </section>
    `,
    components:{
        noteText,
        noteImg,
        noteToDo,
        noteVidoe,
        noteEmpty,
        noteMenuBar
    },
    data(){
        return {

        }
    },
    methods:{
        emitSaveNoteChanges() {
            console.log('text: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
        saveAndClose(){
            notesService.addOrUpdateNote(this.note);
            this.$emit('closeNewNote')
            eventBus.$emit('saveNote', this.note)

        },
        deleteNote() {
            notesService.deleteNoteById(this.note.id);
            this.$emit('closeNewNote')
            console.log('DELLLLLL');
            
        }
    }

}