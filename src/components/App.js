import React from "react"
import Navbar from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if(hours < 12){
        timeOfDay = "morning!"
    } else if(hours >=12 && hours <=15) {
        timeOfDay = "afternoon!"
    } else {
        timeOfDay = "night!"
    }
    return(<div>
        {/* <Navbar />
        <MainContent />
        <Footer /> */}
        <h1> Good {timeOfDay}</h1>
    </div>)
}

export default App