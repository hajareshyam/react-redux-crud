import React, {Component} from 'react';
import { connect } from "react-redux";

import { createPost, updatePost } from "../../store/actions/postActions";
import axios from "axios";

class AddPost extends Component {


    constructor(props){
        super(props)
        this.state= ({
            title:'',
            content:'',
            id:null
        })
    }

    componentDidMount() {
        let id = this.props.match.params.id;
        if(id !== 'undefined'){
            axios.get(`https://hoarding.herokuapp.com/api/posts/${id}`)
                .then((response) => {
                    let post = response.data;
                   this.setState({
                       title:post.title,
                       content:post.content,
                       id:post.id,
                   })
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id;
        const post ={
            ...this.state,
            userId: 1
        }
        if(id !== 'undefined'){
            this.props.updatePost(post);
            this.props.history.push('/');
        }else{
            this.props.createPost(post);
            this.props.history.push('/');
        }


    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }



    render() {
        console.log(this.state);
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Title</label>
                        <input type="text" onChange={this.handleChange} value={`${this.state.title}`} className="form-control" id="title"
                               aria-describedby="emailHelp" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Content</label>
                        <input onChange={this.handleChange}  type="text" value={`${this.state.content}`} className="form-control" id="content"
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
        createPost: (post) => dispatch(createPost(post)),
        updatePost: (post) => dispatch(updatePost(post))
    }
}

export default connect(null,mapDispatchToProps)(AddPost);