'use strict';
import {eventBus} from '../../../services/eventBus-service.js';
import longTxt from '../../../cmps/long-text.cmp.js'


export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section class="note-img">
            <h2 class="note-title" ref="title" name="title" @blur="onSaveTxt('title')" contenteditable="true" :innerText="info.title">{{info.title}}</h2>
            <img contenteditable="true" :src="info.url" alt="">
            <!-- <p class="note-url" ref="url" name="url" @blur="onSaveTxt('url')" contenteditable="true" >{{info.url}}</p> -->
            <long-txt :txt="info.url" initLength="20" contenteditable="true" class="note-url" ref="url" name="url" @blur="onSaveTxt('url')"></long-txt>
        </section>
    `,
    data() {
        return {
            info: null
        }
    },
    created(){
        this.info = this.note.info
    },
    methods:{
        emitSaveNoteChanges(){
            console.log('img: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
        onSaveTxt(fildName){
            const elItem = this.$refs[fildName];
            console.log('elItem',elItem, 'refs',this.$refs[fildName]); 
            this.note.info[fildName] = elItem.innerText;
            this.emitSaveNoteChanges()     
        }
    },
    components: {
        longTxt
    }
}

// {
//     type: "NoteText",
//     isPinned: true,
//     info: {
//         txt: "Fullstack Me Baby!"
//     },
//     style: {}
// }