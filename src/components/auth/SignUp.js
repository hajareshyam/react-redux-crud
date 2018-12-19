import React, {Component} from 'react';
import { connect } from "react-redux";
import { createUser } from '../../store/actions/authActions';

class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className={`col-md-6`}>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" onChange={this.handleChange} id="email" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" onChange={this.handleChange} id="password" placeholder="Password"/>
                    </div>

                    <button onClick={ this.handleSubmit } className="btn btn-primary">Register</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser: (user) => dispatch(createUser(user))
    }
}
export default connect(null,mapDispatchToProps)(SignUp);