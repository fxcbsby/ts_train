import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'


let state = {
    count2:2
}

const reducer = (mstate=state,action)=>{
    switch(action.type){
        case 'increment':{
            return state = {
                ...mstate,
                count2: mstate.count2+action.text
            }
        }
        case 'decrement':{
            return state = {
                ...mstate,
                count2: mstate.count2-action.text
            }
        }
        default:{
            return mstate
        }
    }
}

export const store = createStore(reducer,undefined,applyMiddleware(thunk))
