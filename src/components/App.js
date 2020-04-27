import React from "react"
import Navbar from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

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
        <h1 style={styles}> Good {timeOfDay}</h1>
    </div>)
}

export default App