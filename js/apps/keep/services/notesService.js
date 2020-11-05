'use strict';

import { utilsService } from "../../../services/utils-service.js";

export const notesService = {
    getNotes,
    addNote,
    createNote
}

//DATA MODEL:
const gNotsDefault = [
    {
        type: "noteText",
        id: utilsService.makeId(),
        isPinned: true,
        info: {
            label: 'I`m a dynamic cmp!',
            txt: "Fullstack Me Baby!"
        },
        style: {}
    },

    {
        type: "noteImg",
        id: utilsService.makeId(),
        info: {
            url: '',//"https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },

    {
        type: "noteToDo",
        id: utilsService.makeId(),
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]

        }
    },
    {
        type: "noteVidoe",
        id: utilsService.makeId(),
        info: {
            label: "see that",
            url: 'bgb' // 'https://www.youtube.com/embed/tgbNymZ7vqY'
        }
    }
];

const gNotes = gNotsDefault;



function getNotes() {
    return gNotes;
}


function createNote(type) {
    let note = noteTypes.noteEmpty;
    note.type = type;
    note.info = noteTypes[type].info;
    note.style = noteTypes[type].style;

console.log("createNote -> note", note)
return note;
}

function addNote(type) {
    let note = null;

    switch (type) {
        case 'txt':
            note = {
                type: "noteText",
                id: utilsService.makeId(),
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
                id: utilsService.makeId(),
                info: {
                    url: 'https...',//"https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
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
                id: utilsService.makeId(),
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
                id: utilsService.makeId(),
                info: {
                    label: "see that",
                    url: 'https://...' // 'https://www.youtube.com/embed/tgbNymZ7vqY'
                }
            }
            break;
    }

    gNotes.unshift(note);
    console.log("addNote -> note", note)
    //saveNotes()
    return note
}




const noteTypes = {
    noteEmpty: {
        type: 'noteEmpty',
        id: utilsService.makeId(),
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
        Info: {
            txt: "your msg...",
            label: "Add note...",
        }
    },
    noteImg: {
        type: 'noteImg',
        info: {
            url: 'https...',//"https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
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
            url: 'https...',//"https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
            title: "My vidoe",
            label: "My vidoe",
        }
    },
}


