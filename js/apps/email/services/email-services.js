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
    // check if add new mail, and update to gMails
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
        body: 'how atr you to day',
        isRead: true,
        to: 'puki',
        from: 'muki',
        date: utilsServices.getDate()
    },
    {
        id: utilsServices.makeId(),
        subject: 'my-friend',
        body: 'im fine, and you?',
        isRead: false,
        to: 'muki',
        from: 'puki',
        date: utilsServices.getDate()
    },
]