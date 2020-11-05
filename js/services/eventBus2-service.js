'use strict';

// -----------------Elhanan

export const eventBus2 = {
    shoutGlobalEvent,
    userMsg,
    addListnnerOnUserMsg,
    addListnnerOnEvent

}


const evBus = new Vue();

// evBus.$on('user-msg',()=>{
//     console.log('user-msg!');
// })

function shoutGlobalEvent(eventName, eventValue){
    evBus.$emit(evName,evValue);
    console.log("shoutGlobalEvent -> evName,evValue", evName,evValue)   
}

const USER_MSG = 'USER_MSG';
function userMsg(msg){
    evBus.$emit(USER_MSG ,msg);
    console.log("userMsg -> msg", msg)
}

function addListnnerOnUserMsg(cbFunc,...arg){
    evBus.$on(USER_MSG,()=>{
        cbFunc(...arg)
    })
}

function addListnnerOnEvent(eventName,cbFunc,...arg){
    evBus.$on(eventName,()=>{
        cbFunc(...arg)
    })
}