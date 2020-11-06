import React from "react";
import Webcam from "react-webcam";
import './App.css';

import { withAuthenticator } from 'aws-amplify-react'
import { Storage } from 'aws-amplify'


class App extends React.Component {
    state = { fileUrl: '', file: '', filename: ''}
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
    handleChange = e => {
        const file = e.target.files[0]
        this.setState({
            fileUrl: URL.createObjectURL(file),
            file,
            filename: file.name
        })
    }
    saveFile = () => {
        Storage.put(this.state.filename, this.state.file)
            .then( () => {
                console.log('successfully saved file!')
                this.setState({fileUrl: '', file: '', filename: ''})
            })
            .catch(err => {
                console.log('error uploading file!', err)
            })
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
                  <input type='file' onChange={this.handleChange} />
                  <button onClick={this.handleClick}>capture</button>
                  <button onClick={this.saveFile}>Save File</button>
                </div>
                 <img src={this.state.screenshot} />
                 <img src={this.state.fileUrl} />
              </div>
            </div>
          </div>
        );
      }
    }
export default withAuthenticator(App,{includeGreetings: true});
