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
    <section  class="note-preview-container" :class="{'open-note': isSelected, }" :style='note.style'>  
        <component :is="note.type" class="note-preview" :class="{pinned: note.isPinned}" :note="note" @click.native="isSelected = true"></component>
        <note-menu-bar :note="note"></note-menu-bar>
        <button>Save</button>
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
            note
        }
    },
    methods:{
        emitSaveNoteChanges() {
            console.log('text: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
    }

}