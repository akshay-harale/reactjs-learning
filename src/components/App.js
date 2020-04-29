import React from "react"
import Navbar from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import TodoItem from "./TodoItem"
import '../style.css';
import ContactCard from "./ContactCard"
import ContactList from "./ContactList"
import Joke from "./Joke"
import JoksData from "./JokesData"
import jokesData from "./JokesData"
import products from "./vschoolProducts"
import Product from "./Product"
import todosList from "./todosData"
import randomcolor from "randomcolor"
import Conditional from "./Conditional"

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "Akshay",
            age: 31,
            isLoggedIn: false,
            count: 0,
            color: "",
            isLoading: true

        }
        this.state.todos = todosList
        this.changeCounter = this.changeCounter.bind(this)
        this.changeHandler = this.changeHandler.bind(this)
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.updateLoginState = this.updateLoginState.bind(this)
    }

    handleMouseOver() {
        console.log("Mouse over")
    }
    handleClick() {
        console.log("Clicked button")
    }
    changeCounter() {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }

    changeHandler(id) {
        this.setState((prevState) => {
            const newTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
            return { todos: newTodos }
        })
    }

    increment() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    decrement() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const newColor = randomcolor()
            this.setState({ color: newColor })
        }
    }
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ isLoading: false })
    //     }, 1500)
    // }

    updateLoginState() {
        console.log("clicked")
        this.setState((prevState) =>  {
            return {
                isLoggedIn:!prevState.isLoggedIn
            }
        })
    }

    render() {

        let loginDisplay = this.state.isLoggedIn ? "in" : "out"

        const date = new Date(2018, 6, 31, 15)
        const hours = date.getHours()
        let timeOfDay
        const styles = {

            fontSize: 24
        }
        if (hours < 12) {
            timeOfDay = "morning!"
            styles.color = "#04756F"
        } else if (hours >= 12 && hours <= 15) {
            timeOfDay = "afternoon!"
            styles.color = "#8914A3"
        } else {
            timeOfDay = "night!"
            styles.color = "#D90000"
        }

        const jokes = jokesData.map(joke => <Joke
            key={joke.id}
            question={joke.question}
            punchLine={joke.punchLine}
        />)

        const vProducts = products.map(p => <Product
            key={p.id}
            product={p}
        />)
        const todosComponents = this.state.todos.map(item => {
            return <TodoItem key={item.id} item={item} eventHandler={this.changeHandler} />
        })

        return (<div>
            {/* <Navbar />
            <MainContent />
            <Footer /> */}
            {/* <h1 style={styles}> Good {timeOfDay}</h1>

            {/* <ContactList /> */}
            {/* {jokes} */}
            {/* {vProducts} */}
            <div className="todo-list">
                {todosComponents}
            </div>
            {/* <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
            <h4> You are currently logged {loginDisplay}</h4> */}

            {/* <img src="https://www.fillmurray.com/200/100" onMouseOver={this.handleMouseOver}/>
            <br />
            <br />
            <button onClick={this.handleClick}>Click me</button> */}
            {/* <h1 style={{color: this.state.color}}>{this.state.count}</h1>
            <button onClick={this.increment}>Increment!</button>
            <button onClick={this.decrement}>Decrement!</button> */}
            {/* {this.state.isLoading ? <h1>Loading...</h1> : <Conditional />} */}
            {/* <h1>{this.state.isLoggedIn ? "You are logged In Click to logout":"You are not logged in Click to login"}</h1>
            <button onClick={this.updateLoginState}>{this.state.isLoggedIn ? "Log Out":"Log In"}</button> */}

        </div>)
    }
}
export default App