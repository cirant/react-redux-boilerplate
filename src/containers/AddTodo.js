import React from 'react'
import { connect } from 'react-redux'
import { addTodo, incrementCounter } from '../actions'

let AddTodo = ({ dispatch, counter }) => {
  let input

  console.log('=========================', counter);
  
  const xxx = () => {
    console.log('hola mundo');
    incrementCounter(2)
  }
  return (
    <div>
      counter: {counter} 

      <button onClick={xxx}>click</button>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input
          ref={node => {
            input = node
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  }
}

AddTodo = connect(mapStateToProps)(AddTodo)

export default AddTodo