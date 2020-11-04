'use strict';

import homePage from '../pages/home-page.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    // {
    //     path: '/about',
    //     component: aboutPage
    // },
    // {
    //     path: '/email',
    //     component: emailApp
    // },
    // {
    //     path: '/keep',
    //     component: keepApp
    // },
    // {
    //     path: '/books',
    //     component: booksApp
    // },
]



export const myRouter = new VueRouter({routes})