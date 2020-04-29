import React, { Component } from 'react'
import '../style.css';

class TodoItem extends Component {
    constructor(){
        super()
    }
    render() {
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed} 
                    onChange={()=>this.props.eventHandler(this.props.item.id)}
                />
                <p>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem