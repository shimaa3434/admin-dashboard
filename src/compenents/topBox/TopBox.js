import React from 'react'
import "./TopBox.css"
import {topDealUsers} from '../../data'

const TopBox = () => {
  return (
    <div className='topbox'>
        <h1>top deals</h1>
        <div className='list'>
            {
                topDealUsers.map((item)=> (
                    <div className='listItem' key= {item.id}>
                        <div className='user'>
                            <img src={item.img}/>
                            <div className='userText'>
                                <span className='username'>{item.username}</span>
                                <span className='email'>{item.email}</span>
                            </div>
                        </div>
                        <span className='amount'>${item.amount}</span>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default TopBox