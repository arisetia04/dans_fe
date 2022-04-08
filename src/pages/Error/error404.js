import React, { PureComponent } from 'react';
import {Link} from 'react-router-dom'
class Error404 extends PureComponent {

    render() {
        return (
            <div className="container-scroller" style={{ height: '100vh', background: '#e6e5ff'}}>
                <div className="text-center pt-5">
                    <img style={{width: 'auto',maxWidth: '700px'}} src="./assets/icons/undraw_page_not_found_su7k.svg" />
                    <h1 style={{ fontSize: '124px', fontWeight: 900,color: '#fff',textShadow: '6px 6px black'}}>Page Not Found</h1>
                    <p>It looks like one of the  developers fell asleep</p>
                    <Link to="/signout" class="btn btn-primary">LOGIN</Link>
                </div>
            </div>
           
        );
    }
}

export default Error404;
