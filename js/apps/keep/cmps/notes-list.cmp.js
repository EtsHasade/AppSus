'use strict';
import notePreview from './note-preview.cmp.js'

export default {
    name: 'notesList',
    props: ['notes'],
    template:`
        <section class="notes-list-container">
            <note-preview v-for="note in notes" :note="note"></note-preview>
        </section>
    `,
    components:{
        notePreview
    },
    data(){
        return{

        }
    }
}