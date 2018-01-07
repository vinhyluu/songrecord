import React from 'react';

export default class SongRecorder extends React.Component{
    constructor(){
        super();
        this.state = {
            record: false
        }
        this.recordSong = this.recordSong.bind(this);
    }
    //on window load we want to prompt the user for access to their microphone
    recordSong(e){
        e.preventDefault();
        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            this.setState({
                record: false,
            })
        };
    
    render(){
        return(
            <div>
                <div>
                    <button className="record" onClick={this.recordSong}>Record audio</button>
                    <button className="stop" onClick={this.stopRecord}>Stop</button>
                </div>
                <div>
                    <audio className="audio" controls></audio>
                </div>
            </div>
        )
    }
}