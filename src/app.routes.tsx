import React from 'react'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

const Routes = [
    {
        path: '/',
        sidebarName: 'Page 1',
        element: <Page1></Page1>,
    },
    {
        path: '/page2',
        sidebarName: 'Page 2',
        element: <Page2></Page2>,
    },
    {
        path: '/page3',
        sidebarName: 'Page 3',
        element: <Page3></Page3>,
    },
]

export default Routes
