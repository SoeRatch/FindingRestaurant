import express from 'express';
const router = express.Router();
const path = require('path');

var fs = require('fs');
var parse = require('csv-parse');
const csv=require('csvtojson');

import Restaurant from '../models/restaurant';
import Location from '../models/location';


router.get('/',(req,res)=>{
	Restaurant.find({})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

router.get('/allcuisines',(req,res)=>{
		Restaurant.find().distinct('cuisines', function(error, cuisines) {
	    res.json({cuisines});
	});
});

router.get('/allrestaurants',(req,res)=>{
		Restaurant.find().distinct('restaurant_name', function(error, restaurant_name) {
	    res.json({restaurant_name});
	});
});

router.get('/withcuisines',(req,res)=>{
	const pam=req.query.cuisinevalue;
	Restaurant.find({cuisines:pam})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

router.get('/withrestaurant',(req,res)=>{
	const pam=req.query.resvalue;
	Restaurant.find({restaurant_name:pam})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

/*router.get('/article',(req,res)=>{
	const pam=req.query.paramt;
	Article.findOne({ title: pam})
		.then(article=>res.json({article}));
});*/

router.get('/singlerestaurant',(req,res)=>{
	const pam=req.query.resid;
	Restaurant.findOne({restaurant_id:pam})
		.then(restaurant=>{
			res.json({restaurant});
		});
});

router.get('/location',(req,res)=>{
	const pam=req.query.resid;
	Location.findOne({restaurant_id:pam})
		.then(location=>{
			res.json({location});
		});
});

/*router.get('/',(req,res)=>{
	const sym=req.query.symbol;

	Restaurant.find({ symbol:sym}).then(stock=>{
			res.json(stock);
		});

});

router.get('/allsymbols',(req,res)=>{
	Restaurant.find().distinct('symbol', function(error, symbol) {
    res.json({symbol})
});
*/





export default router;

