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

      handleClick = () => {
        const screenshot = this.webcam.getScreenshot();
        this.setState({ screenshot });
      }

      render() {
        return (
          <div>
            <h1>react-webcam</h1>
            <Webcam
              audio={false}
              ref={node => this.webcam = node}
            />

            <div>
              <h2>Screenshots</h2>
              <div className='screenshots'>
                <div className='controls'>
                  <button onClick={this.handleClick}>capture</button>
                </div>
                {this.state.screenshot ? <img src={this.state.screenshot} /> : null}
              </div>
            </div>
          </div>
        );
      }
    }
export default App;
