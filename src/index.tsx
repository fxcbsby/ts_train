import '@/style/base.scss'
import * as React from 'react'
import { render } from 'react-dom'

const appendHtml = (parent:Element, child:any)=>{
    render(
        child,
        parent
    )
}

document.getElementById('test1Btn').onclick = ()=>{
    import(/* webpackChunkName: "home" */'./home').then(({kk})=>{
        console.log(kk)
    })
}

appendHtml(document.getElementById('app'),(<h1>react</h1>))