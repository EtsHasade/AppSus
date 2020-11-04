'use strict';


//DATA MODEL:
// gNots = var notes = [
//    {
//     type: "NoteText",
//     isPinned: true,
//     info: {
//          txt: "Fullstack Me Baby!"
//          },
//     style: {}
//     },

//     {
//     type: "NoteImg",
//     info: {
//     url: "http://some-img/me",
//     title: "Me playing Mi"
//     },
//     style: {
//     backgroundColor: "#00d"
//     }
//     },
//     {
//     type: "NoteTodos",
//     info: {
//     label: "How was it:",
//     todos: [
//     { txt: "Do that", doneAt: null },
//     { txt: "Do this", doneAt: 187111111 }
//     ]
//     }
//     }
//    ];



//todo cmp keep-app:
// lyout
// editor bar cmp
    // btn add txt-note cmp
    //...

// side filter-nav cmp
    // render tag list [{icon,title,tagTerm},...]


//note-list cmp - main grid container:
    // render *****note-preview dynamic-cmp**** from array of cmp-types+content = computed: noteToShow = gNotes ⊇ filterBy(filterNav)

    // txt-note cmp GOT info emit delete 