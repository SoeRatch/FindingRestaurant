import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	restaurant_id:{type: Number, default: 0},
	country_code:{type: Number, default: 0},
	city:String,
	address:[{type: String}],
	locality:[{type: String}],
	locality_verbose:[{type: String}],
	longitude:{type: Number, default: 0},
	latitude:{type: Number, default: 0}
	/*

Restaurant ID,Country Code,City,Address,Locality,Locality Verbose,Longitude,Latitude


	Restaurant ID,Restaurant Name,Cuisines,Average Cost for two,Currency,Has Table booking,
Has Online delivery,Aggregate rating,Rating color,Rating text,Votes
	*/
});



export default mongoose.model("Locations",schema);

