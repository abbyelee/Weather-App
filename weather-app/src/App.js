import React from "react";

import Titles from "./componants/Titles";
import Form from "./componants/Form";
import Weather from "./componants/Weather";


//const API_KEY = "655362e1c43abb337bb2789d0ceef6db";

class App extends React.Component{
  // getWeather = async () =>{
  //   //const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
  //   //const data = await api_call.json();
  //  // console.log (data);
    
  // }

  render(){
    return (
      <div>
        <Titles></Titles>
        <Form></Form>
        <Weather></Weather>
      </div>   //jsx
      
    );
  }
}

export default App;
