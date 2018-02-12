import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './containers/app/App';
import {Provider} from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from "react-router-dom";
import MessagesPage from "./messages/MessagesPage/MessagesPage";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={App}/>
                <Route path='/messages' component={MessagesPage}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
