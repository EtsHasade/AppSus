'use strict';
// import { utilsServices } from '../../../services/utils-service.js';
import { utilsService } from "../../../services/utils-service.js";


export const emailService = {
    getMailById,
    readMailById,
    deleteMailById,
    getMails,
    favorieMailById,
    addMail,
    countReadMails
}

const baseEmails = [{
        id: utilsService.makeId(),
        subject: 'my-friend',
        body: 'how are you bro?',
        isRead: true,
        to: 'puki',
        from: 'muki',
        date: utilsService.getDate(),
        isTrash: false,
        isStarred: false
    },
    {
        id: utilsService.makeId(),
        subject: 'my-friend',
        body: 'fine!, and you?',
        isRead: false,
        to: 'muki',
        from: 'puki',
        date: utilsService.getDate(),
        isTrash: false,
        isStarred: false

    },
    {
        id: utilsService.makeId(),
        subject: 'haha',
        body: 'call me back plase',
        isRead: false,
        to: 'dudi',
        from: 'suki',
        date: utilsService.getDate(),
        isTrash: false,
        isStarred: false

    },
    {
        id: utilsService.makeId(),
        subject: 'baba',
        body: 'where are you, i looking for you for long time kjhdfjksgdsjgjshfhskhgjgshkdhkjgkjsgdskghsd jkdsgjkdskghksjhghdkhgkhhg',
        isRead: false,
        to: 'suki',
        from: 'dudi',
        date: utilsService.getDate(),
        isTrash: false,
        isStarred: false
    },
]
var gMails = baseEmails;
loadMailsFromStorge();

function getMails() {
    return gMails;
}

function loadMailsFromStorge() {
    // get gmails from storge
    // return gMails
}

function addMail(newMail) {
    //add new mail to gMails
    let addNewMail = {
        id: newMail.id,
        subject: newMail.subject,
        body: newMail.body,
        isRead: false,
        to: 'puki',
        from: newMail.from,
        date: newMail.date,
        isTrash: false,
        isStarred: false
    }
    gMails.unshift(addNewMail);
    //sotre in sotrge
}

function getMailById(mailId) {
    return gMails.find((mail) => mail.id === mailId);
}

function favorieMailById(mailId) {
    gMails.find((mail) => {
        if (mail.id === mailId) mail.isFavorie = true;
    });
    //sotre in sotrge
}

function readMailById(mailId) {
    gMails.find((mail) => {
        if (mail.id === mailId) mail.isRead = true;
    });
    //sotre in sotrge
}

function deleteMailById(mailId) {
    const idx = gMails.findIndex(mail => mail.id === mailId);
    gMails.splice(idx, 1);
    //save to storge
}

function countReadMails() {
    let count = 0;
    for (var i = 0; i < gMails.length; i++) {
        if (gMails[i].isRead === true) count++;
    }
    return count;
}