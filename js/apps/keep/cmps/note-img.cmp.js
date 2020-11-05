'use strict';

export default {
    name: 'noteImg',
    props: ['note'],
    template: `
        <section class="note-img">
            <h2 class="note-title" contenteditable="true" :innerText="info.title">{{info.title}}</h2>
            <img contenteditable="true" :src="info.url" alt="">
        </section>
    `,
    data() {
        return {
            info: null
        }
    },
    created(){
        this.info = this.note.info
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