'use strict';

export default {
    name: 'noteVidoe',
    props: ['info'],
    template:`
        <section class="note-vidoe">
            <iframe class="selected-video-box" :width="width" :height="height" :src="info.url"></iframe>
            <h2 class="note-title">{{info.label}}</h2>
        </section>
    `,
    data(){
        return{
            width: '200',
            height:'160'
        }
    }
}

