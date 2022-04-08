import React, { PureComponent } from "react"
import { Modal, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import moment from 'moment'

class handleModalUpdate extends PureComponent {
    constructor(props) {
        super()
    }

    renderTable() {
        
        console.log("single > ", this.props.data);
        // return this.props.data.map((item, index) => {
        //     return <tr>
        //         <td>{(index + 1)}</td>
        //         <td>{moment(item.createdAt).format('LLLL')}</td>
        //         <td><Link to={`../../booking/?key=${item.bookingId}`} >{item.ref}</Link></td>
        //         <td>{FormatRupiah(item.amount)}</td>
        //         <td>{FormatRupiah(item.service)}</td>
        //     </tr>
        // })
    }

    render() {

        return (
            <Modal size="xl" show={this.props.status ? this.props.status : false} onHide={this.props.onClose}>
                <Form onSubmit={this.props.onSubmit}>
                    <Modal.Header closeButton>
                        <h5>Profit History</h5>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Date</th>
                                        <th>Ref</th>
                                        <th>Amount</th>
                                        <th>Admin Fee</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!this.props.data ? '' : this.renderTable()}
                                </tbody>
                            </table>
                        </div>

                    </Modal.Body>
                </Form>
            </Modal>
        )
    }
}


export default handleModalUpdate