import React from 'react'

const Form = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type = 'text' placeholder='Enter City' name='city'/>
            <input type = 'text' placeholder='Enter Country' name='country'/>
            <button>Submit</button>
        </form>
    )
}

export default Form;