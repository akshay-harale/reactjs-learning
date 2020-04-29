import React, { Component } from 'react'
import '../style.css';

class TodoItem extends Component {
    constructor() {
        super()
    }
    render() {
        let textStyles
        if (this.props.item.completed) {
            textStyles = {
                fontStyle: "italic",
                color: "#cdcdcd",
                textDecoration: "line-through"
            }
        }
        return (
            <div className="todo-item">
                <input type="checkbox" checked={this.props.item.completed}
                    onChange={() => this.props.eventHandler(this.props.item.id)}
                />
                <p style={textStyles}>{this.props.item.text}</p>
            </div>
        )
    }
}

export default TodoItem