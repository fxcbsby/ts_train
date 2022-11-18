import * as React from 'react'
import { Route,Routes,Navigate,Link } from 'react-router-dom'

import routes from '@/router/index'

// import Home from '@/home'
// import Mine from '@/mine'

const LazyHome = React.lazy(()=>import('./home'))
const LazyMine = React.lazy(()=>import('./mine'))

export default function App(){
    return (
        <>
            <h1>欢迎光临</h1>
            <Link to='/home'>home</Link>
            <Link to='/mine'>mine</Link>
            <div>
                <React.Suspense fallback={ <div>正在加载...</div> }>
                    <Routes>
                        <Route path='/home' element={ <LazyHome /> } />
                        <Route path='/mine' element={ <LazyMine /> } />
                    </Routes>
                </React.Suspense>
            </div>
        </>
    )
}