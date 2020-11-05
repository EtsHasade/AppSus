'use strict';

export default {
    name: 'noteText',
    props: ['info'],
    template: `
        <section>
            <h2 class="note-title" :innerText="info.label" contenteditable="true">{{info.label}}</h2>
            <p :innerText="info.txt" contenteditable="true">{{info.txt}}</p>
            <div>
                <button @click.prevent="saveNote">Save</button>   
            </div>
        </section>
    `,
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