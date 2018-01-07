import React from 'react';

export default class SongRecorder extends React.Component{

    //on window load we want to prompt the user for access to their microphone
    recordSong(e){
        e.preventDefault();
        const recordButton = document.getElementsByClassName("record");

        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then(function (stream) {
                recordButton.disabled = false;
                recordButton.addEventListener('click', startRecording);
                ('dataavailable', onRecordingReady);
            });
        };
    

    stopRecord(e){
        e.preventDefault();
        const stopButton = document.getElementsByClassName("stop");

        navigator.mediaDevices.getUserMedia({
            audio: true
        })
            .then(function (stream) {
                stopButton.addEventListener('click', stopRecording);
                recorder = new MediaRecorder(stream);

                // listen to dataavailable, which gets triggered whenever we have
                // an audio blob available
                recorder.addEventListener('dataavailable', onRecordingReady);
            });
        };
    

    render(){
        return(
            <div>
                <div>
                    <button className="record" disabled onLoad={this.recordSong}>Record audio</button>
                    <button className="stop" disabled onLoad={this.stopRecord}>Stop</button>
                </div>
                <div>
                    <audio className="audio" controls></audio>
                </div>
            </div>
        )
    }
}