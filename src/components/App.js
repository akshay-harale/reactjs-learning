import React from "react"
import Navbar from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"
import TodoItem from "./TodoItem"
import '../style.css';
import ContactCard from "./ContactCard"

function App() {
    const date = new Date(2018, 6, 31, 15)
    const hours = date.getHours()
    let timeOfDay
    const styles = { 
        
        fontSize: 24
    }
    if(hours < 12){
        timeOfDay = "morning!"
        styles.color = "#04756F" 
    } else if(hours >=12 && hours <=15) {
        timeOfDay = "afternoon!"
        styles.color = "#8914A3"
    } else {
        timeOfDay = "night!"
        styles.color = "#D90000"
    }
    
    return(<div>
        {/* <Navbar />
        <MainContent />
        <Footer /> */}
        {/* <h1 style={styles}> Good {timeOfDay}</h1>
        <div className="todo-list">
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div> */}
        <div className="contacts">
            <ContactCard 
                contact={{name: "Mr. Whiskerson" ,imgUrl:"http://placekitten.com/300/200" ,phone:"(212) 555-1234" , email:"mr.whiskaz@catnap.meow"}}  
            />
            
            <ContactCard 
                contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com"}}
            />
            
            <ContactCard
                contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
            />
            
            <ContactCard 
                contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
            />
        </div>

    </div>)
}

export default App