import React from 'react'
import "./home.css"
import TopBox from '../../compenents/topBox/TopBox'
import ChartBox from '../../compenents/chartBox/ChartBox'
import {chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxRevenue, barChartBoxVisit} from '../../data'
import BarChartBox from '../../compenents/barChartBox/BarChartBox'
import PieChartBox from '../../compenents/pieChartBox/PieChartBox'
import BigChartBox from '../../compenents/bigChartBox/BigChartBox'
const Home = () => {
  return (
    <div className='home'>
        <div className='box box1'>
          <TopBox />
        </div>
        <div className='box box2'>
          <ChartBox {...chartBoxUser} />
        </div>
        <div className='box box3'>
        <ChartBox {...chartBoxRevenue} />
        </div>
        <div className='box box4'>
          <PieChartBox />
        </div>
        <div className='box box5'>
          <ChartBox {...chartBoxProduct}/>
        </div>
        <div className='box box6'>
        <ChartBox {...chartBoxConversion}/>
        </div>
        <div className='box box7'>
          <BigChartBox />
        </div>
        <div className='box box8'>
          <BarChartBox {...barChartBoxVisit}/>
        </div>
        <div className='box box9'>
        <BarChartBox {...barChartBoxRevenue}/>
        </div>
    </div>
  )
}

export default Home