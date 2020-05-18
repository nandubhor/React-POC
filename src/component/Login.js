import React, { Component } from 'react';
import './Login.css';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Login extends Component {
    constructor(props) {
        super(props)
        this.nameRef = React.createRef();
        this.passRef = React.createRef();
    }

    render() {

        if (this.props.isLogin) {
            console.log('islogin' + this.props.isLogin)
            this.props.history.push('/Product');
        }
        // if(this.props.errorMsg){
        //     swal("Oops!", "Username or password are wrong!", "error");
        // }

        return (
            <div>
                <Container className="login">
                    <h3 className="login-title">LOGIN FORM</h3>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            {/* <Form.Label>User Name</Form.Label> */}
                            <Form.Control ref={this.nameRef} type="text" placeholder="Username" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword mt-4">
                            {/* <Form.Label>Password</Form.Label> */}
                            <Form.Control ref={this.passRef} type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="login-center" controlId="formBasicLogin">
                            <Button onClick={() => this.props.loginHandleSubmit(this.nameRef.current.value, this.passRef.current.value)} size="md" block variant="primary">Login</Button>
                        </Form.Group>

                    </Form>
                        {/* {this.props.errorMsg ?
                            (<div className="alert alert-danger error-msg">Please Enter Correct Username and Password</div>) : null} */}
                    
                </Container>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isLogin: state.isLogin,
        errorMsg: state.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginHandleSubmit: (username, password) => {
            dispatch({ type: 'LOGIN', username: username, password: password })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);