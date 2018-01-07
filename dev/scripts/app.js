import React from 'react';
import ReactDOM from 'react-dom';
import SongRecorder from './recorder';

// const config = {
//   apiKey: "AIzaSyD3UAahOn--1beUuadqzIK6mAr7DsjjTD0",
//   authDomain: "project-5-13be9.firebaseapp.com",
//   databaseURL: "https://project-5-13be9.firebaseio.com",
//   projectId: "project-5-13be9",
//   storageBucket: "project-5-13be9.appspot.com",
//   messagingSenderId: "247419288021"
// };
// firebase.initializeApp(config);

// const dbRef = firebase.storage().ref();

class App extends React.Component {

    //after the page renders we want the user to be prompted for access to using their mic
    // componentDidMount(){
      
    // }

    render() {
      return (
        <div>
          <header>
            <h1>LyricRecord</h1>
            <nav>
              <ul>
                {/* leave blank for now. will include user auth. a) Create account/login page. b) Main page will be Home -> Recorded tracks -> Logout */}
              </ul>
            </nav>
          </header>

          {/* section will just be the audio recorder */}
          <section>
            <SongRecorder />
          </section>
        </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
