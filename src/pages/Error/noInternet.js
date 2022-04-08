import React, { PureComponent } from 'react';

class ErrorInternet extends PureComponent {

    render() {
        return (
            <div className="container-scroller" style={{ height: '100vh', background: '#e6e5ff'}}>
                <div className="text-center pt-5">
                    <img style={{width: 'auto',maxWidth: '700px'}} src="./assets/icons/undraw_server_down_s4lk.svg" />
                    <h1 style={{ fontSize: '124px', fontWeight: 900,color: '#fff',textShadow: '6px 6px black'}}>No Internet</h1>
                </div>
            </div>
        );
    }
}

export default ErrorInternet;
