'use strict';

export default {
    name: 'noteVidoe',
    props: ['info'],
    template:`
        <section class="note-vidoe">
            <h2 class="note-title">{{info.label}}</h2>
            <iframe class="note-video-frame" :width="width" :height="height" :src="info.url"></iframe>
        </section>
    `,
    data(){
        return{
            width: '100%',
            height:'74%'
        }
    }
}

