/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import axios from 'axios';
import s from './index.css';



class RestaurantPage extends React.PureComponent{
state = {
    restaurant:[],
    location:[]

  }
  componentDidMount = () => {
    this.onInitial(this.props);
  }

  onInitial = (props) =>{ // eslint-disable-line
    const parameter =parseInt(this.props.match.params.paramt);  // eslint-disable-line
   axios.get("/restaurant/singlerestaurant",{params:{resid:parameter}}).then(res=>res.data).then(data=> {
      
      this.setState({
        restaurant:data.restaurant
      });
          axios.get("/restaurant/location",{params:{resid:parameter}}).then(res=>res.data).then(data=> { // eslint-disable-line     
                this.setState({
                  location:data.location
                });                  
              });
      
    });
   
  }
  

  render(){
      const restaurant = this.state.restaurant;
      const location = this.state.location;
          
     return(
     <div>
        
        <div className={s.article}>
        
          <h5 className={s.newspaper}><span>{restaurant.restaurant_name}</span></h5>
          
          <div className={s.lefthouse}>
            <div className={s.superdiv}> <div className={s.subdiv}>CITY: </div> 
                                                    
                  <div>
                    <div className={s.inlinedivx}>{location.city} </div> 
                  </div>

                  <div className={s.subdiv}>Address : </div> 
                                                    
                      <div>
                        <div className={s.inlinedivx}>
                            {_.map(location.address, add => { // eslint-disable-line
                       
                               return (
                                   <div>  
                                      {add}
                          
                                   </div>
                               )}
                              )} 


                        </div> 
                      </div>
                                                 
              </div>
            </div>

            <div className={s.lefthouse}>
            <div className={s.superdiv}> <div className={s.subdiv}>Cuisines : </div> 
                                                    
                  <div>
                    <div className={s.inlinediv}>{restaurant.cuisines} </div> 
                  </div>

                  <div className={s.subdiv}>Cost for two : </div> 
                                                    
                  <div>
                    <div className={s.inlinediv}>{restaurant.average_costfortwo} </div> 
                  </div>
                                                 
              </div>
            </div>
            


            <div className={s.lefthouse}>
            <div className={s.superdiv}> <div className={s.subdiv}>Rating : </div> 
                                                    
                  <div>
                    <div className={s.inlinediv}>{restaurant.rating_text} </div> 
                  </div>

                  <div className={s.subdiv}>Average Rating : </div> 
                                                    
                  <div>
                    <div className={s.inlinediv}>{restaurant.aggregate_rating} </div> 
                  </div>

                  <div className={s.subdiv}>Votes : </div> 
                                                    
                  <div>
                    <div className={s.inlinediv}>{restaurant.votes} </div> 
                  </div>
                                                 
              </div>
            </div>

          

            

            

          </div>
        
        </div>

      );

  }

}

RestaurantPage.propTypes={
    match: PropTypes.shape({
    params:PropTypes.shape({
      paramt:PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};


export default RestaurantPage;
