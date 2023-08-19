import React from 'react'
import './ChartBox.css'
import { Link } from 'react-router-dom'
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'


const ChartBox = ({title, number, dataKey, icon, color, percentage, chartData}) => {
  return (
    <div className='chartBox'>
        <div className='boxInfo'>
            <div className='title'>
                <img src={icon} className=''/>
                <span>{title}</span>
            </div>
            <h2>{number}</h2>
            <Link to="/" style={{color:color}}>view all</Link>
        </div>
        <div className='chartInfo'>
            <div className='chart'>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart  data={chartData}>
                    <Tooltip 
                        position={{x: 10, y: 60}}
                        labelStyle={{display: "none", }}
                        contentStyle={{background: "transparent", border: "none"}}
                    />
                        <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2} dot= {false}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className='text'>
                <span className='percentage' style={{color: percentage < 0 ? "tomato": "lightgreen"}}>{percentage}</span>
                <span className='duration'>this day</span>
            </div>
        </div>
    </div>
  )
}

export default ChartBox