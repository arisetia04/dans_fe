import React, { PureComponent } from "react";
import { Field, reduxForm } from "redux-form";
import * as actions from "../../actions";
import { connect } from "react-redux";
import "../../style/login.css";

class Signin extends PureComponent {
    handleFormSubmit({ username, password }) {
        this.props.signinUser({ username, password });
    }

    renderError() {
        if (this.props.errorMessage) {
            return (
                <div className='alert alert-danger'>
                    <span>Oops! {this.props.errorMessage}</span>
                </div>
            );
        }
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <main className='loginPage'>
                <div className=''>
                    <div className='row'>
                        <div className='col-sm-6 col-md-7 intro-section'>
                            <div className='brand-wrapper'></div>
                            <div className='intro-content-wrapper'></div>
                        </div>
                        <div className='col-sm-6 col-md-5 form-section'>
                            <div className='login-wrapper'>
                                <h2 className='login-title'>Sign in</h2>
                                {this.renderError()}
                                <form
                                    onSubmit={handleSubmit(
                                        this.handleFormSubmit.bind(this)
                                    )}>
                                    <div className='form-group'>
                                        <label className='sr-only'>
                                            Username
                                        </label>
                                        <Field
                                            className='form-control'
                                            name='username'
                                            component='input'
                                            type='text'
                                            placeholder='Username'
                                        />
                                    </div>
                                    <div className='form-group mb-3'>
                                        <label className='sr-only'>
                                            Password
                                        </label>
                                        <Field
                                            className='form-control'
                                            name='password'
                                            component='input'
                                            type='password'
                                            placeholder='Password'
                                        />
                                    </div>
                                    <div className='d-flex justify-content-between align-items-center mb-5'>
                                        <button
                                            className='btn login-btn'
                                            type='submit'>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.error };
};

export default reduxForm({
    form: "signin"
})(connect(mapStateToProps, actions)(Signin));
