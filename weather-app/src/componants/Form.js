import React from "react";



class Form extends React.Component{
    render (){
        return (
            <Form>
                
                <input type="text" name="city" placeholder="city..."/>
                <input type="text" name="country" placeholder="Country..." />
                <button>Get Weather</button>


            </Form>
        )
    }
};

export default Form;

