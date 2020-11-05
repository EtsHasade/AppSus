'use strict';

import { utilsService } from "../../../services/utils-service.js";
import { storageService } from "../../../services/storage-service.cmp.js";

export const notesService = {
    getNotes,
    addNote,
    createNote
}

//DATA MODEL:
// const gNotsDefault = [

const noteTypes = {
    noteEmpty: {
        type: 'noteEmpty',
        info: {
            label: "Add note...",
        },
        isPinned: false,
        style: {
            backgroundColor: 'var(--BG-items)'
        }
    },
    noteText: {
        type: 'noteText',
        info: {
            txt: "your msg...",
            label: "Add note...",
        }
    },
    noteImg: {
        type: 'noteImg',
        info: {
            url: "https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
            title: "Me playing Mi",
            label: "My image",
        }
    },
    noteToDo: {
        type: 'noteToDo',
        info: {
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]
            ,label: "ToDo list",
        }
    },
    noteVidoe: {
        type: 'noteVidoe',
        info: {
            url: 'https://www.youtube.com/embed/tgbNymZ7vqY',
            title: "My vidoe",
            label: "My vidoe",
        }
    },
}

const NOTES_STORAGE_KEY = 'gNotes';
const gNotes = loadNotes() || creatNotes();
saveNotes()

function creatNotes() {
    return [
        createNote('noteText'),
        createNote('noteToDo'),
        createNote('noteImg'),
        createNote('noteVidoe')
    ]
}

function getNotes() {
    return gNotes;
}


function createNote(type) {
    let note = JSON.parse(JSON.stringify(noteTypes.noteEmpty));
    note.id = utilsService.makeId(),
    note.type = type;

    console.log("createNote -> noteTypes[type]", noteTypes[type])
    console.log("createNote -> noteTypes[type].info", noteTypes[type].info)
    note.info = JSON.parse(JSON.stringify(noteTypes[type].info));

console.log("createNote -> note", note)
return note;
}

function addNote(type) {
    let note = null;

    switch (type) {
        case 'txt':
            note = {
                type: "noteText",
                id: utilsService.makeId(10),
                isPinned: true,
                info: {
                    label: 'I`m a dynamic cmp!',
                    txt: "Fullstack Me Baby!"
                },
                style: {}
            }
            break;

        case 'img':
            note = {
                type: "noteImg",
                id: utilsService.makeId(10),
                info: {
                    url: "https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
                    title: "Me playing Mi"
                },
                style: {
                    backgroundColor: "#00d"
                }
            }
            break;

        case 'todo':
            note = {
                type: "noteToDo",
                id: utilsService.makeId(10),
                info: {
                    label: "How was it:",
                    todos: [
                        { txt: "Do that", doneAt: null },
                        { txt: "Do this", doneAt: 187111111 }
                    ]

                }
            }
            break;

        case 'vidoe':
            note = {
                type: "noteVidoe",
                id: utilsService.makeId(10),
                info: {
                    label: "see that",
                    url: 'https://www.youtube.com/embed/tgbNymZ7vqY'
                }
            }
            break;
    }

    gNotes.unshift(note);
    console.log("addNote -> note", note)
    //saveNotes()
    return note
}



function saveNotes(){
    storageService.saveToStorage(NOTES_STORAGE_KEY,gNotes)
}

function loadNotes(){
    return storageService.loadFromStorage(NOTES_STORAGE_KEY);
}

