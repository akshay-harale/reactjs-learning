import React from "react"

class TravelFormComponent extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input type="text"
                        value={this.props.data.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.props.handleChange}
                    />
                    <br />
                    <input type="text"
                        value={this.props.data.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.props.handleChange}
                    />
                    <br />
                    <input type="number"
                        value={this.props.data.age}
                        name="age"
                        placeholder="0"
                        onChange={this.props.handleChange}
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
                    <label>Diet</label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="samosa"
                            checked={this.props.data.dietaryRestrictions.samosa}
                            onChange={this.props.handleChange}
                        /> Samosa
                    </label>
                    <br />
                    <label>
                        <input
                            type="checkbox"
                            name="vadapav"
                            checked={this.props.data.dietaryRestrictions.vadapav}
                            onChange={this.props.handleChange}
                        /> Vadapav
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={this.props.data.gender === "male"}
                            onChange={this.props.handleChange}
                        /> Male
                    </label>
                    <br />
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={this.props.data.gender === "female"}
                            onChange={this.props.handleChange}
                        /> Female
                    </label>
                    <br />

                    <label>Select location:</label>
                    <select
                        value={this.props.data.location}
                        onChange={this.props.handleChange}
                        name="location">
                        <option value="">-- Please Choose a destination --</option>
                        <option value="MH">Maharashtra</option>
                        <option value="GA">Goa</option>
                        <option value="HYD">Hydrabad</option>
                    </select>
                    <br/>
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.props.data.firstName + " " + this.props.data.lastName}</p>
                <p>Your age: {this.props.data.age}</p>
                <p>Your gender: {this.props.data.gender}</p>
                <p>Your destination: {this.props.data.location}</p>
                <p>
                    Your dietary restrictions:
                    Vadapav: {this.props.data.dietaryRestrictions.vadapav ? "Yes" : "No"}
                    Samosa: {this.props.data.dietaryRestrictions.samosa ? "Yes" : "No"}
                    {/* Dietary restrictions here, comma separated */}
                </p>
            </div>
        )
    }
}

export default TravelFormComponent