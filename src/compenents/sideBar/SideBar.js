import React from 'react'
import {Link} from 'react-router-dom'
import './sideBar.css'
import {menu} from '../../data'
const SideBar = () => {
  return (
    <div className='sidebar'>
      {menu.map(item => (
        <div className='item' key={item.id}>
        <span className='title'> {item.title}</span>
        
        {item.listItems.map(list => (
          <Link to= {list.url} className='listItem' key={list.id}>
          <img src={list.icon}/>
          <span className='listItemTitle'>{list.title}</span>
          </Link>
        ))}

        </div>
      ))}
     
      
    </div>
  )
}

export default SideBar