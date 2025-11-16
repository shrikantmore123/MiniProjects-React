import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1 className="text-orange-600 text-3xl font-bold mt-5">
        Todo
      </h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
