import React, { Component } from 'react';
import axios from 'axios';
import Post from './components/Post';
import CreatePost from './components/CreatePost';
import './styles/App.css';

class App extends Component {

    state = {
        posts: []
    }

    //get data to work with
    componentDidMount() {
        axios.get('/api/posts')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    posts: response.data
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleNewPostSubmit = (e) => {
        e.preventDefault();
        axios.post('api/posts', {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        })
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="App">
                <CreatePost onSubmit={this.handleNewPostSubmit} handleInputChange={this.handleInputChange} />
                <hr />
                {this.state.posts.map((post) => {
                    return (
                        <Post key={post._id} postData={post} />
                    );
                })}
            </div>
        );
    }
}

export default App;
