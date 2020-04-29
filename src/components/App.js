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
import todos from "./todosData"

class App extends React.Component {
    render() {
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

        const todosComponents = todos.map(item => <TodoItem key={item.id} item={item} />)

        return (<div>
            {/* <Navbar />
            <MainContent />
            <Footer /> */}
            {/* <h1 style={styles}> Good {timeOfDay}</h1>
            <div className="todo-list">
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div> */}
            <ContactList />
            {/* {jokes} */}
            {/* {vProducts} */}
            {/* {todosComponents} */}

        </div>)
    }
}
export default App