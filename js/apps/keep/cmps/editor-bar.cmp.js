'use strict';

import { notesService } from "../services/notesService.js";
import notePreview from './note-preview.cmp.js'


export default {
    name: 'editorBar',
    template: `
        <section class="notes-list-container">
            <!-- <note-preview class="editor-bar-note" v-if="noteEmpty" :note="noteEmpty"></note-preview> -->
        </section>
    `,
    components: {
        notePreview
    },
    data() {
        return {
            noteEmpty: null,
        }
    },
    methods:{
    },
    created(){
        this.noteEmpty = notesService.createNote('noteEmpty');
        console.log("created -> this.emptyNote", this.noteEmpty)
    }
}
