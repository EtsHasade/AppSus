'use strict';
import noteText from './note-text.cmp.js';
import noteImg from './note-img.cmp.js';
import noteToDo from './note-todo.cmp.js';
import noteVidoe from './note-vidoe.cmp.js';
import noteEmpty from './note-empty.cmp.js';


export default {
    name: 'notePreview',
    props: ['note'],
    template:`
    <div class="note-preview-container">  
        <component :is="note.type" class="note-preview" :info="note.info"></component>
        <div class="actions-note-bar">
            <button>+img</button>
            <button>+text</button>
            <button>+todo</button>
            <button>+vidoe</button>
        </div>
    </div>
    `,
    components:{
        noteText,
        noteImg,
        noteToDo,
        noteVidoe,
        noteEmpty
    }
}