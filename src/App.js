import React, { useEffect } from 'react'
import {useSelector , useDispatch } from 'react-redux'
import { getUser } from './redux-saga/saga-user'
import './App.css';



function App() {
  const dispatch = useDispatch()

useEffect(()=>{
  dispatch(getUser())
},[dispatch])

const user = useSelector((state)=> state.user.user)
const error = useSelector((state)=> state.user.error)
  return (
    <div className="App">
      <h1>hello</h1>
      {error.message ? (
        <p>{error.message}</p>
      ):(
        <div>
      {user && 
      user.map(user => <p>{user.name}</p>)}
      </div>
      )}
      
      
    </div>
  );
}

export default App;