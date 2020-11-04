'use strict';

export default {
    name: 'noteToDo',
    props: ['info'],
    template:`
        <section class="note-todo">
            <h2 class="note-title">{{info.label}}</h2>
            <div class="todo" v-for="(todo, idx) in info.todos" :key="idx"><span>{{todo.txt}}</span><span>{{todo.doneAt}}</span></div>
        </section>
    `
}

// info: {
//     label: "How was it:",
//     todos: [
//         { txt: "Do that", doneAt: null },
//         { txt: "Do this", doneAt: 187111111 }
//     ]

// }