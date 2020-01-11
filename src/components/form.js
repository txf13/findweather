import React from 'react';

// <input type="text" name="country" placeholder="Country..."/>

class Form extends React.Component{
    render(){
        return (
            <div>               
               <form onSubmit={this.props.weatherMethod}>
                    <input type="text" name="city" placeholder="City..."/>
                    
                    <button>Get Weather</button>
                </form>

            </div>

        );
    }
  
}

export default Form;
