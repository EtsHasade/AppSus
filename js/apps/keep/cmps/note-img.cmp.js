'use strict';

export default {
    name: 'noteImg',
    props: ['info'],
    template:`
        <section class="note-img">
            <h2 class="note-title" contenteditable="true":innerText="info.title">{{info.title}}</h2>
            <img contenteditable="true" :src="info.url" alt="">
        </section>
    `
}

// {
//     type: "NoteText",
//     isPinned: true,
//     info: {
//         txt: "Fullstack Me Baby!"
//     },
//     style: {}
// }