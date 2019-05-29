import React from "react";


const Form = props=>(
    <form onSubmit={props.getWeather}>

        <input type="text" name="city" placeholder="city..."/>
        <input type="text" name="country" placeholder="Country..." />
        <button>Search</button>
    </form>
)
//state 1
// class Form extends React.Component{
//     render(){
//         return (
//             <form onSubmit={this.props.getWeather}>
                
//                 <input type="text" name="city" placeholder="city..."/>
//                 <input type="text" name="country" placeholder="Country..." />
//                 <button>Search</button>
//             </form>
//         )
//     }
// };

export default Form;

