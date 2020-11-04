'use strict';

export const storageService = {
    saveToStorage,
    loadFromStorage
}

function saveToStorage(key, item) {
    localStorage.setItem(key, JSON.stringify(item))
    console.log("saveToStorage -> JSON.stringify(item)", JSON.stringify(item))
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key))
}