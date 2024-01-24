import React from 'react'
import './airconditionitem.css'

export const AirConditionItem = (props) => {
  return (
    <div className='airConditionItem'>

    <div className='airConditionRow'>
    <div className='airConditionIcon'>
        {props.icon}
        </div>
        <p>{props.text}</p>
    </div>   
          <div className='measureText'>
          <h3>{props.measure}</h3>  
        </div>
    </div>
  )
}
