'use strict';

export default {
    name: 'noteEmpty',
    props: ['note'],
    template: `
        <section>
            <h2 class="note-title">{{info.label}}</h2>
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
