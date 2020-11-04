//DATA MODEL:
const gNotsDefault = [
    {
        type: "noteText",
        isPinned: true,
        info: {
            label: 'I`m a dynamic cmp!',
            txt: "Fullstack Me Baby!"
        },
        style: {}
    },

    {
        type: "noteImg",
        info: {
            url: "https://images.freeimages.com/images/large-previews/035/young-golden-retriever-1404848.jpg",
            title: "Me playing Mi"
        },
        style: {
            backgroundColor: "#00d"
        }
    },

    {
        type: "noteToDo",
        info: {
            label: "How was it:",
            todos: [
                { txt: "Do that", doneAt: null },
                { txt: "Do this", doneAt: 187111111 }
            ]

        }
    }
];

const gNotes = gNotsDefault;

export const notesService = {
    getNotes,
}


function getNotes() {
    return gNotes;
}


