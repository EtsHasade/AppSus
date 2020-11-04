'use strict';

export default {
    name: 'notePreview',
    props: ['note'],
    template:`
        <h3>{{note.type}}</h3>
    `
}