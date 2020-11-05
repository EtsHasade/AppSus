'use strict';

import { notesService } from "../services/notesService.js";


export default {
    name: 'editorBar',
    template: `
        <section class="notes-list-container">
            <div class="action-btns-container">
                <button @click="addNote('txt')" >Enter text note...</button>
                <button @click="addNote('img')" >img</button>
                <button @click="addNote('todo')" >ToDo</button>
                <button @click="addNote('vidoe')" >Vidoe</button>
            </div>
            
        </section>
    `,
    components: {

    },
    data() {
        return {
            newNote: null
        }
    },
    methods:{
        addNote(type) {
           this.newNote = notesService.addNote(type)
        }
    }
}
