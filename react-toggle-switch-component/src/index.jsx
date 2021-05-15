import React from 'react';
import ReactDOM from 'react-dom';
import ToggleSwitch from './toggle-switch';

const element = (
  <div>
    <ToggleSwitch text="ON" />
  </div>

);

ReactDOM.render(
  element,
  document.querySelector('#root')

);
