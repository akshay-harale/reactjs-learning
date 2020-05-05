const host = window.location.hostname === 'localhost' ? 'http://localhost:8081' : "https://springboot-apis.herokuapp.com";
const config = {
    backendHost: host
}

export default config