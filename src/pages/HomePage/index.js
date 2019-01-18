/* eslint-disable func-names */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */

import React from 'react';
import axios from 'axios';
import Select from 'react-select';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import s from './index.css';

const Count = (props) =>{
  if(props.count>=0){
    return <div><h3>{props.count} restaurants Available</h3></div>;
  }
  else{
    return null;
  }

}  

class HomePage extends React.Component {

  state = {
    restaurants:[],
    selectedOption: null,
    selectedOptionRestaurant:null,
    options:[],
    optionsRestaurant:[],
    count:-1

  }

	componentDidMount = () => {
    this.onInit();
  }

  onInit = () =>{
	   axios.get("/restaurant").then(res=>res.data).then(data=> {
	   	
	  
      this.setState({
        restaurants:data.restaurant
      });
	  });


     axios.get("/restaurant/allcuisines").then(res=>res.data).then(data=> {
              const cuisines=data.cuisines.map(cuisine=>{            // eslint-disable-line
                    return {
                      value:cuisine,
                      label:cuisine
                    }
                  });

              this.setState({
                options:cuisines
              })
          
        });

     axios.get("/restaurant/allrestaurants").then(res=>res.data).then(data=> {
              const restaurant_name=data.restaurant_name.map(res=>{            // eslint-disable-line
                    return {
                      value:res,
                      label:res
                    }
                  });

              this.setState({
                optionsRestaurant:restaurant_name
              })
          
        });
  }

handleChange = (selectedOption) => {
    this.setState({ selectedOption },
     function () {

          let parameter = this.state.selectedOption;
          parameter=parameter.value;

            axios.get("/restaurant/withcuisines",{params:{cuisinevalue:parameter}}).then(res=>res.data).then(data=> {
                    this.setState({
                        restaurants:data.restaurant,
                        count:data.restaurant.length
                      });
          
                });
      }

      );
  }

  handleRestaurantChange = (selectedOptionRestaurant) => {
    this.setState({ selectedOptionRestaurant },
     function () {

          let parameter = this.state.selectedOptionRestaurant;
          parameter=parameter.value;

            axios.get("/restaurant/withrestaurant",{params:{resvalue:parameter}}).then(res=>res.data).then(data=> {
                    this.setState({
                        restaurants:data.restaurant,
                        count:-1
                      });
          
                });
      }

      );
  }
    

  render() {
    const restaurants=this.state.restaurants;
    const selectedOption = this.state.selectedOption;
    const selectedOptionRestaurant= this.state.selectedOptionRestaurant;
    const count = this.state.count;
    return (
    	<div>
      <div className={s.symbols}>
            <span className="label success">Find Cuisines</span>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={this.state.options}
              classNamePrefix="my-select"
            />
            
      </div>
<Count count={this.state.count}/>

<div className={s.symbols}>
            <span className="label success">Find Restaurants</span>
            <Select
              value={selectedOptionRestaurant}
              onChange={this.handleRestaurantChange}
              options={this.state.optionsRestaurant}
              classNamePrefix="my-select"
            />
            
      </div>

<div className={s.pfcontent}>

              
                <div className={s.pfgrid}>
                    {_.map(restaurants, restaurant => {
                              const id = restaurant.restaurant_id;
                              const name=restaurant.restaurant_name;
                             return (
                                    <div>
                                        <Link to={`/restaurant/${id}`}>
                                          <div className={s.swiggleBox}> 
                                              <section className={[s.col].join(' ')}>
                                                    <h3>{name}</h3>
                                              </section>
                                              
                                              <h5>Cuisines:<span> {restaurant.cuisines} </span></h5>
                                              <h5>Cost for two people:<span> {restaurant.average_costfortwo}</span></h5>
                                              <svg  x="0" y="0" width="100%" height="100%" viewBox="0 0 130 65" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.6,0.5c0,5.4,0,61.5,0,61.5s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0
                                                  s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0
                                                  c5.4-5.4,9.9,0,9.9,0s4.5,5.4,9.9,0c0,0,0-56.1,0-61.5H0.6z"/>
                                              </svg>
                                              <h5> votes: {restaurant.votes} <span>Rating: {restaurant.rating_text}</span></h5>
                                          </div>
                                        </Link>
                                    </div>
                              )}
                  )}


                  

                </div>
              </div>
    




		</div>
    );
  }
}

export default HomePage;