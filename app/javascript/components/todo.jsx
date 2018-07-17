import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


const todos = [
  {id: 0, title: 'Task 0', isDone: false},
  {id: 1, title: 'Task 1', isDone: false},
  {id: 2, title: 'Task 2', isDone: true}
]

function TodoList(props) {

  const todos = props.todos.map(todo => {
    return (
      <li key={todo.id}>{todo.title}</li>
    )
  })
  return (
    <ul>
      {todos}
    </ul>
  )
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      todos: todos
    }
  }


  render() {
    return (
      <div className='container'>
        <h1>My todos</h1>
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
