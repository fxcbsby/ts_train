import '@/style/home.scss'

import React,{ useState,useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'

import { increment, decrement } from '@/store/homeSlice'



interface HomeProps{
    start?:number
}
interface HomeStates{
    count:number
}


export default function Home(){
    const count = useSelector((state)=>state.home.count)
    console.log('更新111')
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log('更新')
        // console.log(this.nodeEle)
    })
    const  incrementFn= ()=>{
        dispatch(increment(2))
    }
    const decrementFn = ()=>{
        dispatch(decrement(2))
        
    }
    // const clickMe = ()=>{

    // }

    return (
        <>
            <p>111: {count}</p>
            <button onClick={e=>incrementFn()}>加2</button>
            <button onClick={e=>decrementFn()}>减2</button>
        </>
    )
}
