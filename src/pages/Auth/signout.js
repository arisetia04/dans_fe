import React, { PureComponent } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../../actions';
class Signout extends PureComponent {

    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div className="loadSpinnerDef">
                <Spinner animation="border" role="status" /> <span style={{ marginLeft: '30px' }}>Cleaning Session...</span>
            </div>
        )
    }
}

export default connect(null, actions)(Signout);
