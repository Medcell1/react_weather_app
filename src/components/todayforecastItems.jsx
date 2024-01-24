import React from 'react'
import './todayforecastitem.css'
export const TodayForeCastItem = (props) => {
    const isLastItem = props.isLastItem || false;
    return (
        <div className='todayforecastitem'>
            <div className='forecastdetails'>
                <p>{props.time}</p>
                <img src={props.image[props.index]} width={45} height={45} />
                <h3>{props.degree}</h3>
            </div>
            {!isLastItem && <div className='divider'></div>}


        </div>
    )
}

