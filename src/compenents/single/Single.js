import React from 'react'
import './Single.css'
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
const Single = ({id, img, title, info, chart, activities}) => {
  return (
    <div className='single'>
      <div className='view'>
        <div className='info'>
          <div className='topInfo'>
            {img &&  <img src= {img}/>}
            <h1>{title}</h1>
            <button>updata</button>
          </div>
          <div className='details'>
            {Object.entries(info).map(item => (
              <div className='item' key={item[0]}>
                  <span className='itemTitle'>{item[0]} : </span>
                  <span className='itemValue'>{item[1]}</span>
              </div>
            ))}
              
          </div>
        </div>
        <hr />
        {chart && <div className='chart'>
        <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chart.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="" />
          <YAxis />
          <Tooltip />
          <Legend />
          {chart.dataKeys.map(item => (
          <Line type="monotone" dataKey={item.name} stroke={item.color} />
          ))}
        </LineChart>
      </ResponsiveContainer>
        </div>
        }
        
      </div>
      <div className='activities'>
        <h2>latest activities</h2>
        {activities &&  <ul>
          {activities.map(item => (
            <li key={item.text}>
            <div>
              <p>{item.text}</p>
              <time>{item.time}</time>
            </div>
            </li>
          ))}
         
        </ul>
        }
       
      </div>
    </div>
  )
}

export default Single