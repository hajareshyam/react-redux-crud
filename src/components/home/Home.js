import React, {Component} from 'react';
import { connect } from 'react-redux'
import PostsList from "../posts/postsList";
import {getPosts} from "../../store/actions/postActions";


class Home extends Component {

    componentDidMount() {
        this.props.getPosts();
    }
    render() {
        return (
            <div>
                <PostsList/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        // users: state.auth.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => dispatch(getPosts()),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);