import React, { PureComponent } from "react";
import { connect } from "react-redux";
import ModalUpdate from "./jobSingle";
import * as actions from "../../actions";
class Dashboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            modalItem: false
        };

        this.emptyAlert = this.emptyAlert.bind(this);
        this.renderListJob = this.renderListJob.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);

        this.handleModalClose = this.handleModalClose.bind(this);
    }

    componentWillMount() {
        this.fetchingData();
    }

    fetchingData(description, location, full_time, page) {
        this.props.fetchJob({ description, location, full_time, page });
    }

    emptyAlert() {
        this.setState({ alert: null });
    }

    handleModalClose() {
        this.setState({ modalItem: false });
    }

    handleShowModal(id) {
        console.log(id);
        this.props.fetchSingleJob(id);
        this.setState({ modalItem: true });
    }

    renderListJob() {
        return this.props.jobs.data.map((i, index) => (
            <tr key={index}>
                <td>
                    <div onClick={() => this.handleShowModal(i.id)}>
                        <h4>{i.title}</h4>
                        <p>
                            {i.company} - {i.type}
                        </p>
                    </div>
                </td>
                <td>
                    <p>{i.location}</p>
                    <p>{i.created_at}</p>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                {this.state.alert}

                <div className='container-scroller'>
                    <div className='container-fluid page-body-wrapper'>
                        <div className='main-panel'>
                            <div className='content-wrapper'>
                                <React.Fragment>
                                    <ModalUpdate
                                        data={this.props.job.data}
                                        status={this.state.modalItem}
                                        onClose={this.handleModalClose}
                                    />

                                    <div className='row mt-3'>
                                        <div className='col-12'>
                                            <div className='card'>
                                                <div className='card-body d-inline-flex'>
                                                    <table>
                                                        <tr>
                                                            <td colSpan={2}>
                                                                Job List
                                                            </td>
                                                        </tr>

                                                        {!this.props.jobs
                                                            ? "loading...."
                                                            : this.renderListJob()}
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        jobs: state.job.jobs,
        job: state.job.job
    };
};

export default connect(mapStateToProps, actions)(Dashboard);
