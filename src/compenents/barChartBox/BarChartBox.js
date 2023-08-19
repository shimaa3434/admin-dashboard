import React from 'react'
import './BarChartBox.css'
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

const BarChartBox = ({title, chartData, color, dataKey}) => {
  return (
    <div className='barChartBox'>
        <h1>{title}</h1>
        <div className='chart'>
            <ResponsiveContainer width="99%" height={150}>
            <BarChart data={chartData}>
                <Tooltip
                    cursor={{fill: "none"}} 
                    contentStyle={{background: "#2a3447", borderRadius: "5px"}}
                    labelStyle={{display: "none"}}
                />
            <Bar dataKey={dataKey} fill={color} />
            </BarChart>
        </ResponsiveContainer>
        </div> 
    </div>
  )
}

export default BarChartBox