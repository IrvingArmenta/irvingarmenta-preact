import { h, Component, render } from 'preact'
import App from './src/app'
const root = document.getElementById('app');

render(<App />,root);

// react developer tools
require('preact/debug');
