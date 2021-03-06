import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount() {
            console.log("this.props.authenticated >> ", this.props.authenticated)
            if (!this.props.authenticated) {
                this.props.history.push('/signin');
            }
        }

        componentWillUpdate(nextProps) {
            if (!nextProps.authenticated) {
                this.props.history.push('/signin');
            }
        }

        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}
