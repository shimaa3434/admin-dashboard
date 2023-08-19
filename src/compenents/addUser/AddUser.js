import React from 'react'
import './AddUser.css'

const AddUser = ({slug, columns, setOpen}) => {
const handleSubmit= (e)=> {
    e.preventDeflut()

}
  return (
    <div className='addUser'>
        <div className='modal'>
            <span className='close' onClick={()=> setOpen(false)}>X</span>
            <h1>add new {slug}</h1>
            <form onSubmit={handleSubmit}>
                {columns.filter(item => item.field !== "id" && item.field !== "image").map(i => (
                    <div className='item'>
                    <label htmlFor={i.headerName}>{i.headerName}</label>
                    <input type= {i.type} placeholder={i.field}/>
                    </div>
                ))}
                <button>send</button>
            </form>
        </div>
    </div>
  )
}

export default AddUser