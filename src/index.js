import React from 'react';
import ReactDOM from 'react-dom';
import Home from './_components/Home'
import { Provider } from 'react-redux';
import { store } from './_helpers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}> 
<Home /> 
</Provider>, document.getElementById('root'));
registerServiceWorker();
