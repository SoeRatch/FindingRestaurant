import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	restaurant_id:{type: Number, default: 0},
	restaurant_name:String,
	cuisines:String,
	average_costfortwo:String,
	currency:String,
	has_tablebooking:String,
	has_online_delivery:String,
	aggregate_rating:{type: Number, default: 0},
	rating_color:String,
	rating_text:String,
	votes:{type: Number, default: 0}
	/*date:String,
	symbol:String,
	open: {type: Number, default: 0},
	close:{type: Number, default: 0},
	low:{type: Number, default: 0},
	high:{type: Number, default: 0},
	volume:{type: Number, default: 0}

	articlestring:String,
	title:String,
	userId : {type: mongoose.Schema.Types.ObjectId, required: true },
	votes: {type: Number, default: 0},
	voters: [{type: String}]

	Restaurant ID,Restaurant Name,Cuisines,Average Cost for two,Currency,Has Table booking,
Has Online delivery,Aggregate rating,Rating color,Rating text,Votes
	*/
});



export default mongoose.model("Restaurants",schema);