import React,{Component} from "react";
import "../meme.css";

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.changeImage = this.changeImage.bind(this)
        
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const memesData= response.data.memes
                this.setState({
                    allMemeImgs: memesData
                })
            })
    }
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    changeHandler(event) {
        //console.log("Working")
        const {name,value} = event.target
        this.setState({ [name]: value })
     }
    changeImage(event) {
        event.preventDefault()
        this.setState(prevState=>{
            const randomInt = this.getRandomInt(100)
            return {
                randomImage: prevState.allMemeImgs[randomInt].url
            }
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.changeImage}>
                    <input 
                        type="text" 
                        name="topText" 
                        placeholder="Top Text" 
                        value={this.state.topText}
                        onChange={this.changeHandler}
                    />

                    <input 
                        type="text" 
                        name="bottomText" 
                        placeholder="BottomTop Text" 
                        value={this.state.bottomText}
                        onChange={this.changeHandler}
                    />

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}

export default MemeGenerator