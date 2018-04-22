import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<React.Fragment>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</React.Fragment>,
 document.getElementById('root'));
registerServiceWorker();
