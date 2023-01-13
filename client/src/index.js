import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createRoot} from 'react-dom/client';

import reducers from './reducers';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);

const store = createStore(reducers, compose(applyMiddleware(thunk)))


root.render(<Provider store = {store}>
        <App />
        </Provider>)

// ReactDOM.render(
//     <Provider store = {store}>
//         <App />
//     </Provider>,
//      document.getElementById('root'));
