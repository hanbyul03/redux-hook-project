import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider,useSelector,useDispatch} from "react-redux";
import {createStore} from "redux";
// reducer
const rootReducer=(state={count:0},action)=>{
  switch (action.type) {
    case 'UP':
      return {
        ...state,
        count:state.count+1
      }
    case 'DOWN':
      return {
        ...state,
        count:state.count-1
      }
    case 'SET_COUNT':
      return {
        ...state,
        count:action.value
      }
    default:
      return state;
  }
}
// action
const store=createStore(rootReducer)
function Counter(){
  const count=useSelector(state=>state.count);
  const dispatch=useDispatch();
  const countUp={type:'UP'}
  const countDown={type:'DOWN'}
  const reset={type:'SET_COUNT',value:0}
   return (
       <div>
         <p>count:{count}</p>
         <button onClick={()=>dispatch(countUp)}>UP(+)</button>
         <button onClick={()=>dispatch(countDown)}>DOWN(-)</button>
         <button onClick={()=>dispatch(reset)}>RESET</button>
       </div>
   )
}
// App 실행
function App(){
  return (
      <Provider store={store}>
        <Counter/>
      </Provider>
  )
}
export default App;
