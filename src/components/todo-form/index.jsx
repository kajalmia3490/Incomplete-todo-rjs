import React, { Component } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

export class TodoForm extends Component {
    state = {
        text: '',
        description: ''
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createTodo(this.state)
        event.target.reset()
        this.setState({ text: '', description: '' })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label>Enter Task</Label>
                    <Input
                        placeholder='do some code'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Describe Task</Label>
                    <Input
                        type='textarea'
                        placeholder='Write some short description about your task'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <Button
                    type='submit'
                >
                    Create Task
                </Button>
            </Form>
        )
    }
}

export default TodoForm