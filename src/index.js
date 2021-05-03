import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App2 from './App2';

// Redux:
import { createStore, applyMiddleware } from 'redux';
// Thunk:
import thunk from "redux-thunk";
// The <Provider> component makes the Redux store available 
// to any nested components that need to access the Redux store.
import { Provider } from 'react-redux'; 
// Reducers:
import rootReducer from './redux/reducers/combineReducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App1 />
    <br />
    <App2 />  
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);