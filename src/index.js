import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.css' ;
import { Provider } from 'react-redux';
// import '../node_modules/bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
// import '../node_modules/font-awesome/css/font-awesome.min.css'
import { store } from './store/index';

render(
    <Provider store={store}>
        <App/> 
    </Provider>
    , document.getElementById('root')
) ;