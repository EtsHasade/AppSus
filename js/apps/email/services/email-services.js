'use strict';
// import { utilsServices } from '../../../services/utils-service.js';
import { utilsService } from "../../../services/utils-service.js";


export const emailService = {
    getMailById,
    readMailById,
    deleteMailById,
    getMails,
    favorieMailById,
    addMail
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
        isFavorie: true,
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
        isFavorie: false,
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
        id: utilsService.makeId(),
        subject: newMail.subject,
        body: newMail.body,
        isRead: false,
        to: 'puki',
        from: newMail.from,
        date: utilsService.getDate(),
        isTrash: false,
        isFavorie: false,
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