'use strict';

import homePage from './pages/home-page.cmp.js';
import keepApp from './apps/keep/pages/keep-app.cmp.js';
import emailApp from './apps/email/pages/email-app.cmp.js';
import emailCompose from './apps/email/pages/email-compose.cmp.js';
import emailList from './apps/email/cmps/email-list.cmp.js';
// import emailDetails from './apps/email/cmps/email-details.cmp';




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