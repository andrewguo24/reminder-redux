import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const middleWare = [thunk]

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(...middleWare)
    )
);

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();