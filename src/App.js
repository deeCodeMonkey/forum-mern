import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

    state = {
        message: 'no message'
    }

    //get data to work with
    componentDidMount() {
        axios.get('/api/posts')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    message: <pre>{JSON.stringify(response.data, null, 2)}</pre>
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  render() {
    return (
      <div className="App">
            <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
