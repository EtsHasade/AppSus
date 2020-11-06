'use strict';
//
export default {
    props: ["txt","initLength"],
    template: `
    <section class="mr-5" @click.stop="isShowAll = !isShowAll">
      <p class="note-url">{{textToShow}}</p>
    </section>
    `,
    data() {
        return {
            isShowAll: false,
            length: this.initLength || 100
        };
    },
    computed: {
        textToShow() {
            const txt = this.txt;
            if (txt.length > this.length && !this.isShowAll) {
                return txt.substring(0, this.length) + "...";
            } else return txt;
        },
        buttonTxt() {
            if (!this.isShowAll) {
                return "Read more...";
            } else {
                return "Read Less";
            }
        },
    },
};