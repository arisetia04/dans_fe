import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { AUTH_USER } from './actions/types';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';

import registerServiceWorker from './registerServiceWorker';


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(reduxThunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);


const token = localStorage.getItem("dans_token");
if (token) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
