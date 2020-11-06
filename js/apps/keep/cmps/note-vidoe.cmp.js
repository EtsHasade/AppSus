'use strict';
import {eventBus} from '../../../services/eventBus-service.js'
import longUrl from '../cmps/long-url.cmp.js'


export default {
    name: 'noteVidoe',
    props: ['note'],
    template:`
        <section class="note-vidoe">
            <h2 class="note-title" ref="label" name="label" @blur="onSaveTxt('label')" >{{info.label}}</h2>
            <iframe class="note-video-frame" :width="width" :height="height" :src="info.url"></iframe>
            <long-url class="note-url" :txt="info.url" initLength="20" contenteditable="true"  ref="url" name="url" @blur="onSaveTxt('url')"></long-url>
        </section>
    `,
    components:{
        longUrl
    },
    data(){
        return{
            width: '100%',
            height:'74%',
            info: null
        }
    },
    created(){
        this.info = this.note.info
    },
    methods:{
        emitSaveNoteChanges(){
            console.log('text: this.note', this.note);
            eventBus.$emit('saveNote', this.note)
        },
        onSaveTxt(fildName){
            const elItem = this.$refs[fildName];
            console.log('elItem',elItem, 'refs',this.$refs[fildName]); 
            this.note.info[fildName] = elItem.innerText;
            this.emitSaveNoteChanges()     
            
        }
    }
}

