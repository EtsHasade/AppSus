'use strict';

export default {
    name: 'noteText',
    props: ['info'],
    template:`
        <section>
            <h2 class="note-title">{{info.label}}</h2>
            <pre>{{info.txt}}</pre>
        </section>
    `
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