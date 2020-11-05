'use strict';

import { notesService } from "../services/notesService.js";

export default {
    name: 'noteText',
    props: ['note'],
    template: `
        <section>
            <h2 class="note-title" :innerText="info.label" contenteditable="true">{{info.label}}</h2>
            <p :innerText="info.txt" contenteditable="true">{{info.txt}}</p>
            <div>
                <button @click.prevent="saveNote">Save</button>   
            </div>
        </section>
    `,
    data(){
        return{
            info: null
        }
    },
    created(){
        this.info = this.note.info
    },
    methods: {
        saveNote() {
            this.$emit('saveNote', this.info)
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