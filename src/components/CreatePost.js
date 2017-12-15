import React from 'react';

const CreatePost = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>

                    <form>
                        <div className="form-group">
                            <label for="title">Post Title</label>
                            <input name="title" onChange={props.handleInputChange} type="text" className="form-control" id="title" placeholder="post title" />
                        </div>
                        <div className="form-group">
                            <label for="body">Content</label>
                            <input name="body" onChange={props.handleInputChange} type="text" className="form-control" id="body" placeholder="content here" />
                        </div>
                        <div className="form-group">
                            <label for="author">Author</label>
                            <input name="author" onChange={props.handleInputChange} type="text" className="form-control" id="author" placeholder="author" />
                        </div>
                        <button type="submit" className="btn btn-default" onClick={props.onSubmit}>Submit</button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default CreatePost;


