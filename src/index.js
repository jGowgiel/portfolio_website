// Import react dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app/App.js';

// Import misc dependencies
import registerServiceWorker from './registerServiceWorker';


// Render the BrowserRouter nexted inside a Provider to allow store access
ReactDOM.render(
    <BrowserRouter><App /></BrowserRouter>,
    document.getElementById('root')
);

registerServiceWorker();
