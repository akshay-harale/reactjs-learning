import React from "react"

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            about: "",
            friendly: true,
            gender: "",
            favColor:"blue"
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <br />
                    <input type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />

                    {
                        /**
                         * Other useful form elements:
                         * 
                         *  <textarea /> element
                         *  <input type="checkbox" />
                         *  <input type="radio" />
                         *  <select> and <option> elements
                         */
                    }
                    <br />
                    <textarea
                        name="about"
                        placeholder="Tell something"
                        onChange={this.state.handleChange}
                    />
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="friendly"
                            checked={this.state.friendly}
                            onChange={this.handleChange}
                        /> Is Friendly
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.state.gender === "male"}
                            onChange={this.handleChange}
                        /> Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.state.gender === "female"}
                            onChange={this.handleChange}
                        /> Female
                    </label>
                    <br />

                    <label>Favorite Color:</label>
                    <select
                        value={this.state.favColor}
                        onChange={this.handleChange}
                        name="favColor">
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <h1>{this.state.firstName} {this.state.lastName}</h1>
                    <h2>You are a {this.state.gender}</h2>
                    <h2>Your favorite color is {this.state.favColor}</h2>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form