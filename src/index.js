import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import ShoppingCart from './components/ShoppingCart';

ReactDOM.render(
    <ShoppingCart />,
    document.getElementById('root')
);
registerServiceWorker();
