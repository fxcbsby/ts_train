import '@/style/base.scss'
import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import  store  from '@/store/store'
import  routes from '@/router/index'


const root = createRoot(document.getElementById('app') as HTMLElement)

const router = createHashRouter(routes,{
    // basename:'/home'
})

root.render(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    
)
