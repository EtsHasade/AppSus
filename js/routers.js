'use strict';

import homePage from './pages/home-page.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailCompose from './apps/email/pages/email-compose.cmp.js';
import emailList from './apps/email/cmps/email-list.cmp.js';
import emailInbox from './apps/email/cmps/email-inbox.cmp.js';
import emailFavorites from './apps/email/cmps/email-favorites.cmp.js';
import emailSent from './apps/email/cmps/email-sent.cmp.js';
import emailSnooz from './apps/email/cmps/email-snooz.cmp.js';




const routes = [{
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    {
        path: '/email',
        component: emailApp,
        children: [{
                path: '',
                component: emailList
            },
            {
                path: 'compose',
                component: emailCompose
            },
            {
                path: 'inbox',
                component: emailInbox
            },
            {
                path: 'favorites',
                component: emailFavorites
            },
            {
                path: 'sent',
                component: emailSent
            },
            {
                path: 'snooz',
                component: emailSnooz
            },
            // {
            //     path: 'details:id',
            //     component: emailDetails

            // }
        ]
    },
    {
        path: '/keep',
        component: keepApp
    },
    // {
    //     path: '/books',
    //     component: booksApp
    // },
]



export const myRouter = new VueRouter({ routes });