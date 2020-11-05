'use strict';
//
export default {
    props: ["txt","initLength"],
    template: `
    <section class="mr-5">
      <p>{{textToShow}}</p>
      <button @click.stop="isShowAll = !isShowAll">{{buttonTxt}}</button>
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