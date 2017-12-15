import React from 'react';
import '../styles/Post.css';

const Post = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>{props.postData.title}</h1>
                    <p className='author-text'>{props.postData.author}</p>
                    <p className='body-text'>{props.postData.body}</p>
                    <pre>{JSON.stringify(props.postData, null, 2)}</pre>
                </div>
            </div>
        </div>
    );
}

export default Post;