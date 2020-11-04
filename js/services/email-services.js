'use strict';
import utilServices from './utilsService.js';

export const emailService = {
    getMailById,
    readMailById,
    deleteMailById
}

var gMails;
getMails();

function getMails() {
    // set gMails = baseEmails;
    // check if add new mail, and update to gMails
}

function addMail(newMail) {
    //add new mail to gMails
}

function getMailById(id) {
    for (var i = 0; i < gMails.length; i++) {
        if (gMails[i].id === id) {
            console.log(gMails[i])
            return gMails[i];
        }
    }
}

function readMailById(id) {
    for (var i = 0; i < gMails.length; i++) {
        if (gMails[i].id === id) {
            gMails[i].isread = true
        }
    }
    //sotre in sotrge
}


function deleteMailById(mailId) {
    for (var i = 0; i < gMails.length; i++) {
        if (gMails[i].id === mailId) {
            //delete from storge
        }
    }
}

var baseEmails = [{
        id: utilsService.makeId(),
        subject: 'my-friend',
        body: 'how atr you to day',
        isRead: true,
        to: 'puki',
        from: 'muki',
        date: utilsService.getDate()
    },
    {
        id: utilsService.makeId(),
        subject: 'my-friend',
        body: 'im fine, and you?',
        isRead: false,
        to: 'muki',
        from: 'puki',
        date: utilsService.getDate()
    },
]