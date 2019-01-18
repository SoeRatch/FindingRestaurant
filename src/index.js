import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'babel-polyfill';
import App from './App';


ReactDOM.render(
	<BrowserRouter>
		<Route component={App}/>
	</BrowserRouter>,
	document.getElementById('AppRoot')
);

