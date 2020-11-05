'use strict';
import utilsServices from '../../../services/utils-service.js';


export const emailService = {
    getMailById,
    readMailById,
    deleteMailById
}

var gMails = baseEmails;
getMails();

function getMails() {
    // get gmails from storge
    // return gMails
}

function addMail(newMail) {
    //add new mail to gMails
}

function getMailById(mailId) {
    return gMails.find((mail) => mail.id === mailId);
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

var baseEmails = [{
        id: utilsServices.makeId(),
        subject: 'my-friend',
        body: 'how are you bro?',
        isRead: true,
        to: 'puki',
        from: 'muki',
        date: utilsServices.getDate(),
        isTrash: false,
        isFavorie: true,
    },
    {
        id: utilsServices.makeId(),
        subject: 'my-friend',
        body: 'fine!, and you?',
        isRead: false,
        to: 'muki',
        from: 'puki',
        date: utilsServices.getDate(),
        isTrash: false,
        isFavorie: false,
    },
]