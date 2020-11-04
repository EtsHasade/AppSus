'use strict';

export const utilsService = {
    randomInt,
}


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}