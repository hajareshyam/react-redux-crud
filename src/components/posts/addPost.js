import React, {Component} from 'react';
import { connect } from "react-redux";

import { createPost } from "../../store/actions/postActions";

class AddPost extends Component {
    constructor(props){
        super(props)
        this.state= ({
            title:null,
            content:null
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const post ={
            ...this.state,
            userId: 1
        }
        this.props.createPost(post);
        this.props.history.push('/');

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }



    render() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="title"
                               aria-describedby="emailHelp" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <input onChange={this.handleChange}  type="text" className="form-control" id="content"
                               placeholder="Content"/>
                    </div>
                    <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post))
    }
}

export default connect(null,mapDispatchToProps)(AddPost);