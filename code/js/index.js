import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from './reducers';
import Page from './components/Page';

const store = createStore(Reducers);

ReactDOM.render(
  //<h2>Test</h2>, 
  <Page />,
  document.getElementById('DisplayArea')
);
