import React, { Component } from "react";
import config from "../config/config"
import UserService from "../services/user-service";
import AuthService from "../services/auth-service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      content: "",
      currentUser: undefined,
      videoStatus: undefined,
      selectedFile: undefined,
      userVideos: undefined
    };
    this.videoTimeHandler = this.videoTimeHandler.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.onFileUpload = this.onFileUpload.bind(this)
  }
  videoSecond = 0;

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );


    const user = AuthService.getCurrentUser();


    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        // showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        // showAdminBoard: user.roles.includes("ROLE_ADMIN")
      });
      // UserService.getVideoStatus("01-01_Trailer",user.id)
      // .then(
      //   response => {
      //     let [minutes,seconds]=response.data.duration.split(":")
      //     let duration = (minutes * 60) + seconds
      //     var video = document.getElementById('vid');
      //     video.currentTime = duration;
      //     video.pause();
      //   },
      //   error => {
      //     console.log("error:"+error)
      //   })
      UserService.getVideos()
        .then(res => {
          this.setState({ userVideos: res.data })
        }, err => console.log("error from api:" + err))
    }

  }

  videoTimeHandler(event) {
    //console.log(event.target.currentTime)
    let minutes = Math.floor(event.target.currentTime / 60);
    let seconds = Math.floor(event.target.currentTime - minutes * 60);
    if (this.videoSecond === 20) {
      this.videoSecond = 0
      // call api to save this in database

      UserService.updateStatus(
        "01-01_Trailer",
        this.state.currentUser.id,
        minutes + ":" + seconds
      ).then(response => {
        //console.log("response:" + response)
      },
        error => {
          //console.log("error:" + error)
        })

      //console.log(minutes + ":" + seconds)
    }
    this.videoSecond = this.videoSecond + 1

    // setTimeout(function(){
    //   console.log('your audio is started just now');
    // }, 1000)
  }
  onFileChange = event => {

    // Update the state 
    this.setState({ selectedFile: event.target.files[0] });

  };
  onFileUpload = () => {

    // Create an object of formData 
    this.setState({ loading: true })
    let formData = new FormData();
    console.log(this.state.selectedFile)
    // Update the formData object 
    formData.append(
      "file",
      this.state.selectedFile
    );

    UserService.uploadFile(formData)
      .then(res => {
        this.setState({loading: false})
        console.log("response" + res)
      },
        err => {
          this.setState({loading: false})
          console.log("error" + err)
        })
  }

  genrateVideoTags() {
    if (this.state.userVideos) {
      const tags = this.state.userVideos.map(v => {
        console.log(v);
        return <div key={v.id}><video
          id="vid"
          width="320"
          height="240"
          onTimeUpdate={this.videoTimeHandler} controls>
          <source src={config.backendHost + "/videos/" + v.fileName + "?access_token=" + this.state.currentUser.accessToken} type="video/mp4" />
        </video >
          <br />
        </div>
      })
      console.log(tags)
      return tags
    } else {
      return ""
    }

  }

  render() {

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          {this.state.currentUser ?

            (
              <div >
                <input type="file" onChange={this.onFileChange} />
                <button onClick={this.onFileUpload}>
                  Upload!
                </button>
                {this.state.loading ?
                  <div className="spinner-grow text-info" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                  : ""
                }
                <br /><br /><br />
                videos
                {this.genrateVideoTags()}

              </div>
            ) : (
              <p></p>
            )
          }

        </header>
      </div>
    );
  }
}