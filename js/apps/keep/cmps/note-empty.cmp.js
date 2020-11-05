'use strict';

export default {
    name: 'noteEmpty',
    props: ['info'],
    template:`
        <section>
            <h2 class="note-title">{{info.label}}</h2>
        </section>
    `
}
