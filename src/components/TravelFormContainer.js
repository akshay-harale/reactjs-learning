import React from "react"
import TravelFormComponent from "./TravelFormComponent"

class TravelFormContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            about: "",
            friendly: true,
            gender: "",
            location: "",
            dietaryRestrictions: {
                samosa: false,
                vadapav: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState(prevState => {
                return {
                    dietaryRestrictions: {
                        ...prevState.dietaryRestrictions,
                        [name]: checked
                    }
                }
            })

            :
            this.setState({ [name]: value })
    }

    render() {
        return (
            <TravelFormComponent
                handleChange={this.handleChange}
                data={this.state}
            />
        )
    }
}

export default TravelFormContainer