import React from "react";
import Webcam from "react-webcam";
import './App.css';

class App extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          screenshot: null,
          tab: 0
        };
      }


      render() {
          const videoConstraints = {
              facingMode: "user"
          };
          return <Webcam videoConstraints={videoConstraints} />;
      }
}

export default App;
