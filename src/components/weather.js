import React from 'react';

class Weather extends React.Component{
    //constructor(props) { }
    render(){
        return (
            <div>                 
                { 
                    this.props.city &&
                        <div>
                            <p>Местоположение:{this.props.city},{this.props.country} </p>            
                            <p>Температура:{this.props.temp} </p>
                            <p>Восход:{this.props.sunrise} </p>
                            <p>Заход:{this.props.sunset} </p>
                        </div>
                    
                }

            </div>

        );
    }
  
}

export default Weather;
