import '@/style/home.scss'

import React,{ useState,useEffect } from 'react'

import { store } from './store/store'


interface HomeProps{
    start?:number
}
interface HomeStates{
    count:number
}

// 异步dispatch，调用thunk中间件
async function  createIncrementAction(dispatch,getState){
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(2)
        },1000)
    })
    const res =  await promise;
    dispatch({
        type:'increment',
        text:2
    })
}

export function Home({start=0}:HomeProps){
    const [count, setCount] = useState(start)
    const hState = store.getState()
    useEffect(()=>{
        console.log('更新')
    })
    const increment = ()=>{
        // store.dispatch({
        //     type:'increment',
        //     text:2
        // })
        store.dispatch(createIncrementAction)
    }
    const decrement = ()=>{
        store.dispatch({
            type:'decrement',
            text:2
        })
        
    }

    return (
        <>
            {/* <p>{count}</p> */}
            <p>111: {count}</p>
            <p>222: {hState.count2}</p>
            <button onClick={e=>setCount(count+1)}>加1</button>
            <button onClick={e=>setCount(count-1)}>减1</button>

            <button onClick={e=>increment()}>加2</button>
            <button onClick={e=>decrement()}>减2</button>
        </>
    )
}
