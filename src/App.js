import React from 'react';
import Info from './components/info';
import Form from './components/form';
import Weather from './components/weather';

const API_KEY="bc3c769785e409da05b5fca6ab83f12b";

class App extends React.Component{

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather= async (e) =>{
        e.preventDefault();
        const city=e.target.elements.city.value;
        if (city){
          const api_url= await       
          //fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},uk&appid=${API_KEY}&units=metric`, {mode: 'no-cors'})
          fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},ru&appid=${API_KEY}&units=metric`);
          const data= await api_url.json();
          
          let sunrise=data.sys.sunrise;
          let sunset=data.sys.sunset;

          let date=new Date();
          date.setTime(sunrise*1000);
          let sunrise_date=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

          date.setTime(sunset*1000);
          let sunset_date=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

          console.log(data);    
          
          this.setState({      
              temp: data.main.temp,
              city: data.name,
              country: data.sys.country,
              sunrise: sunrise_date,//data.sys.sunrise,
              sunset: sunset_date, //data.sys.sunset,
              error: ""          

          });  
        }      

    }
    render(){
        //console.log(this.props);
        return (
            <div>
              <Info />
              <Form weatherMethod={this.gettingWeather} />
              
              <Weather  

                temp={this.state.temp}
                city={this.state.city}
                country= {this.state.country}
                sunrise= {this.state.sunrise}
                sunset= {this.state.sunset}
                error={this.state.error}
              />

            </div>

        );
    }
  
}

/*function App() {
  return (
    
  );
}*/

export default App;
