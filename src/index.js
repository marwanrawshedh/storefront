import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import {createStore,applyMiddleware} from 'redux';
import reducers from './redux/reducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducers,composeWithDevTools(applyMiddleware(logger) ));
class Main extends React.Component {
  render() {
    return (
    <Provider store={store}>
    <React.Fragment>
      <App />
    </React.Fragment>
  </Provider>)
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Main />, rootElement);
