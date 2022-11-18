
import * as React from 'react'
import { Navigate } from 'react-router-dom'
// import App from '@/app'
// import {Home} from '@/home'
// import {Mine} from '@/mine'

import Layout from './../components/layout';

const LazyApp = React.lazy(()=>import('../app'))
const LazyHome = React.lazy(()=>import('../home'))
const LazyMine = React.lazy(()=>import('../mine'))
let routes
export  default routes = [
    {
        path:'/',
        // element: <Navigate to='/home' />
        element: <LazyApp />,
        children:[
            {
                path:'home',
                element: <LazyHome />
            },
            {
                path: 'mine',
                element: <LazyMine />
            }
        ]
    }
]