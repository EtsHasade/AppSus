'use strict';
import notePreview from './note-preview.cmp.js'

export default {
    name: 'notesList',
    props: ['notes'],
    template:`
        <section class="notes-list-container">
            <note-preview v-for="(note, idx) in notes" :note="note" :key="note.id"></note-preview>
        </section>
    `,
    components:{
        notePreview
    },
}