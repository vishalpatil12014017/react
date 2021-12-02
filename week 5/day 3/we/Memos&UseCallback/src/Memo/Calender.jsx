import React from 'react'

export const Calender=({date,memo})=>{
    console.log(`${memo?"MemoisCalender":"Calender"} `)
    return (
        <div>
            <h1> This date is : {date}</h1>
        </div>
    )
}

export const MemoisCalender=React.memo(Calender) 
