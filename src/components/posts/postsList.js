import React, {Component} from 'react';
import { connect } from "react-redux";
import { getPosts, deletePost } from '../../store/actions/postActions';
import {Link} from "react-router-dom";



class PostsList extends Component {

    componentDidMount() {
        this.props.getPosts();
    }

    handleDelete = (e) => {
        this.props.deletePost(e.target.id);
    }

    render() {
        const posts  = this.props.posts
        return (
            <div>
                <div><Link to={`/post/add`}><button>Add Post</button></Link></div>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Content</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts && posts.map((post,i) => {
                        return(
                            <tr key={post.id}>
                                <th scope="row">{i+1}</th>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td><button>Edit</button><button id={post.id} onClick={this.handleDelete}>Delete</button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPosts: () => dispatch(getPosts()),
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsList);