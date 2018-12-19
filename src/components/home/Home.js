import React, {Component} from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../../store/actions/authActions';
import PostsList from "../posts/postsList";


class Home extends Component {

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
        getUsers: () => dispatch(getUsers())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);