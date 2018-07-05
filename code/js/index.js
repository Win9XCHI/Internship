import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';

const store = createStore();

ReactDOM.render(
  <h2>Test</h2>, 
  document.getElementById('DisplayArea')
);
