import React, { Component } from 'react'
import {Input} from 'reacstrap'
import TableView from '../tableview/table'
import ListView from '../listview/listview'

export class Todo extends Component {

  state = {
    todos: [
      {
        id: 'text',
        isSelect: false,
        isComplete: false,
        text: 'some text',
        time: new Date(),
        description: 'something text here...'
      },
      {
        id: 'text500',
        isSelect: false,
        isComplete: false,
        text: 'some text',
        time: new Date(),
        description: 'something text here...'
      }
    ]
  }

  toggleSelect = todoId => {

  }
  toggleComplete = todoId => {

  }

  render() {
    return (
      <div>
        <h1 className='fs-3 text-center mt-4'>Stack Todo</h1>
        <div>
          <ListView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect} />
        </div>

        

        <div>
          <TableView
            todos={this.state.todos}
            toggleComplete={this.toggleComplete}
            toggleSelect={this.toggleSelect}
          />
        </div>
      </div>
    )
  }
}

export default Todo

// const todo = {
//     id: 'text',
//     text: 'something',
//     time: 'time',
//     description: 'something describe',
//     isComplete: false,
//     isSelect: false
// }