import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/AdminsListPage';

export default [
{
    ...App,
    routes: [
        {
            ...HomePage,  //Here doing the spread function 
            path:'/',
            exact:true
        },
        {
          ...AdminsListPage,
          path: '/admins'  
        },
        {
            ...UsersListPage,   
            path:'/users'
        },
        {
            ...NotFoundPage  
        }
    ]
}

];

