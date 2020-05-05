import React, { Component } from 'react'

export class Login extends Component {
    render() {
        return (
            <div>
                <div className="container h-100">
                    <div className="row justify-content-center align-items-center h-100">
                        <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-4">
                            <h2 className="py-3 text-center">Login</h2>
                            <form>
                                <div className="formbox">
                                    <div className="form-group">
                                        <input type="text" name="UserName" className="form-control" placeholder="Enter Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="Password" className="form-control" placeholder="Enter Password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
