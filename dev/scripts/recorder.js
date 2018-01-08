import React from 'react';

export default class SongRecorder extends React.Component{
    constructor(){
        super();
        this.state = {
            record: false,
            songData: {}
        }
        this.recordSong = this.recordSong.bind(this);
        this.stopRecord = this.stopRecord.bind(this);
    }
    //on window load we want to prompt the user for access to their microphone
    recordSong(e){
        e.preventDefault();
        let recorder;
        let chunks = [];
        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then(function(stream){

                recorder = new MediaRecorder(stream);
                recorder.start();
                console.log("clicked");
                //as recording happens, we need to collect the audio data with ondataavailable
                recorder.ondataavailable = function(e){
                    chunks.push(e.data);
                }
            })
            this.setState({
                record: true,
                // songData: chunks
            })
            if(this.state.record === false){
                // recorder.start();
                this.setState({
                    songData: chunks
                })
            }
        };

    stopRecord(e){
        e.preventDefault();
    
        this.setState({
            record: false,
        })
    }
    
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