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
    <section class="note-preview-container" :class="{'open-note': isSelected}" >  
        <component :is="note.type" class="note-preview" :info="note.info" @click.native="isSelected = true"></component>
        <div class="actions-note-bar" >
            <button>+img</button>
            <button>+text</button>
            <button>+todo</button>
            <button>+vidoe</button>
        </div>
        <div>
            <button v-if="isSelected" @click.prevent="saveNote">Save</button>   
        </div>
    </section>
    `,
    components:{
        noteText,
        noteImg,
        noteToDo,
        noteVidoe,
        noteEmpty
    },
    data(){
        return {
            isSelected: false
        }
    },
    methods:{
        saveNote(){
            this.isSelected = false;

        }
    }
}