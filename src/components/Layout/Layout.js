import React, { Component } from 'react'
import Header from '../Header/Header'
import List from '../List/List'
import TodoForm from '../TodoForm/TodoForm'

export default class Layout extends Component {

    //content = "";
    state = {
        todo : [
            // {
            //     id: 1,
            //     content: 'Sample'
            // },
            // {
            //     id: 2,
            //     content: 'Sample 2'
            // }
        ]
    }

    addTodoitem = () => {
        this.setState({todo : [...this.state.todo,{content: this.content}]})
    }

    valueChanged = (evt) => {
        this.content = evt.target.value;  
        
    }

    removeTodoitem = (e) =>{
        let oldTodo = this.state.todo;
        let newTodo = oldTodo.filter((_, i) => {
            return e !== i;
        });
        this.setState({todo: [...newTodo]});
    }

    render() {
        if(this.state.todo.length < 0){  
            console.log("empty");
        }

        return (
            <>
                <div className="card border-0">
                    <div className="card-header bg-primary">
                        <Header />
                    </div>
                    <div className="card-body">
                        <List remove={this.removeTodoitem} value={this.state.todo} />
                    </div>
                    <div className="card-footer">
                        <TodoForm content={this.valueChanged} clicked={this.addTodoitem}/>
                    </div>
                </div>
            </>
        )
    }
}

