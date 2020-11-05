'use strict';

import { utilsService } from "../../../services/utils-service.js";
import { storageService } from "../../../services/storage-service.cmp.js";

export const notesService = {
    getNotes,
    addOrUpdateNote,
    createNote,
    deleteNoteById,
    getNoteById,
    getCopyNoteById
}


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
                { txt: "Do that", isDone: false, doneAt: null },
                { txt: "Do this", isDone: false, doneAt: 187111111 }
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

function addOrUpdateNote(noteChange) {
    noteChange = JSON.parse(JSON.stringify(noteChange))

    const theNoteIdx = gNotes.findIndex(note => note.id === noteChange.id);
    if (theNoteIdx === -1) gNotes.unshift(noteChange);
    else  gNotes[theNoteIdx] = noteChange;
    
    saveNotes()
    return noteChange
}

function deleteNoteById(noteId) {
    const theNoteIdx = gNotes.findIndex(note => note.id === noteId);
    if (theNoteIdx === -1) console.log('failed to delete note. note id:'+ noteId);
    else  gNotes.splice(theNoteIdx,1)
    saveNotes()
}


function getNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    if (theNoteIdx === -1) console.log('failed to get note. note id:'+ noteId);
    else  return note
}

function getCopyNoteById(noteId) {
    const note = gNotes.find(note => note.id === noteId);
    if (theNoteIdx === -1) console.log('failed to get note. note id:'+ noteId);
    else  return JSON.parse(JSON.stringify(note))
}






function saveNotes(){
    storageService.saveToStorage(NOTES_STORAGE_KEY,gNotes)
}

function loadNotes(){
    return storageService.loadFromStorage(NOTES_STORAGE_KEY);
}

