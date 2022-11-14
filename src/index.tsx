import '@/style/base.scss'
import * as React from 'react'
import { createRoot } from 'react-dom/client'

import { store } from './store/store'

import {Home} from './home'
import {Mine} from './mine'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
    <div>
        {/* <Mine></Mine> */}
        <Home start={2} />
    </div>
    
)

store.subscribe(()=>{
    root.render(
        <div>
            {/* <Mine></Mine> */}
            <Home />
        </div>
        
    )
})
