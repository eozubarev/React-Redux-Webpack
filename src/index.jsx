"use strict";

import './index.less'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import {store} from './reducers'

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)

