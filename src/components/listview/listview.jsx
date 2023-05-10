import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Input, Button, ListGroup } from 'reactstrap'

// List Item Component:
const ListItem = ({ todos, toggleSelect, toggleComplete }) => {
    return (
        <div>
            <ListGroupItem className='d-flex align-items-center'>
                <Input
                    type='checkbox'
                    id={todos.id}
                    checked={todos.isSelect}
                    onChagne={() => toggleSelect(todos.id)}
                />
                <div className='mx-3'>
                    <h5>{todos.text}</h5>
                    <p>{todos.time.toDateString()}</p>
                </div>
                <Button
                    className='ml-auto'
                    color={todos.isComplete ? 'danger' : 'success'}
                    onClick={() => toggleComplete(todos.id)}
                >
                    {todos.isComplete ? 'Completed' : 'Running'}
                </Button>
            </ListGroupItem>
        </div>
    )
}

ListItem.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired

}

// List View Component:
const ListView = (todos, toggleSelect, toggleComplete) => {
    return (
        <ListGroup>
            <div>
                {todos.map(todo => (
                    <ListItem
                        key={todo.id}
                        todo={todo}
                        toggleSelect={toggleSelect}
                        toggleComplete={toggleComplete} />
                ))}
            </div>
        </ListGroup>
    )
}

ListView.propTypes = {
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired

}

export default ListView