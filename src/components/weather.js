import React from 'react';

//class Weather extends React.Component{   
 //   render(){
     const Weather=(props) =>{
        return (
            <div className="weather__info">                 
                { 
                    //this.props.city &&
                    props.city &&
                        <div>
                            <p>Местоположение:{props.city},{props.country} </p>            
                            <p>Температура:{props.temp} </p>
                            <p>Восход:{props.sunrise} </p>
                            <p>Заход:{props.sunset} </p>
                        </div>
                    
                }
                <p className="error">{props.error} </p>

            </div>

        );
    }
  
//}

export default Weather;
