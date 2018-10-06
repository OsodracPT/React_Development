class Channel extends RTCIceCandidate.Component{
    render(){
        return(
            <li>Channel name</li>
        )
    }
}

ReactDOM.render(<Channel />, document.getElementById('app'));
