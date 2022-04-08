import React, { Component } from "react";
import { Navbar, Alert } from "react-bootstrap";
import * as Icon from "react-feather";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Topbar extends Component {
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {}

    render() {
        return (
            <React.Fragment>
                <Navbar
                    collapseOnSelect
                    expand='lg'
                    bg='primary'
                    variant='primary'
                    className={styles._Prtq_navbar}>
                    <span
                        className='toggle-menu'
                        onClick={this.changeStatusMenu}>
                        <Icon.Menu color='white' size={18} />
                    </span>

                    <div className='justify-content-end'>
                        <Link
                            className='p-3 topbar-menu'
                            to='/signout'
                            title='Signout'>
                            <Icon.LogOut color='white' size={18} />
                        </Link>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

export default connect(mapStateToProps, actions)(Topbar);
