/* eslint-disable no-unused-vars */
import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import PropTypes from 'prop-types';
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import s from './components/style/App.css';

const App = ({location}) => (
	<div>
	 	<div className={s.zigzag} />
	 	<Route location={location} path='/' exact component={HomePage}/>
	 	<Route location={location} path="/restaurant/:paramt" exact component={RestaurantPage} /> 	
	
	 </div>

);

App.propTypes = {
	location: PropTypes.shape({
		pathname:PropTypes.string.isRequired
		}).isRequired
};

export default App;


