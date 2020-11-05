'use strict';
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteToDo from './note-todo.cmp.js';
import noteVidoe from './note-vidoe.cmp.js';


export default {
    name: 'notePreview',
    props: ['note'],
    template:`
    <div class="note-preview-container">  
        <component :is="note.type" class="note-preview" :info="note.info"></component>
    </div>
    `,
    components:{
        noteText,
        noteImg,
        noteToDo,
        noteVidoe
    }
}