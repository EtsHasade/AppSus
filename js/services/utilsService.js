'use strict';

export const utilsService = {
    randomInt,
    makeId
}

//return random num not-included
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//return random id
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}