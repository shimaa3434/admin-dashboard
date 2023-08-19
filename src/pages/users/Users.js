import React from 'react'
import './users.css'
import {userRows} from '../../data'
import DataTable from '../../compenents/dataGrid/DataTable'
import { useState } from 'react';
import AddUser from '../../compenents/addUser/AddUser';


const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'image', headerName: 'Image', width: 100,
   renderCell : (params)=> {
      return <img src={params.row.img || "/noavatar.png"}/>
  }},
  { field: 'firstName', headerName: 'FristName', width: 100 , type: "string"},
  { field: 'lastName', headerName: 'LastName', width: 100 , type: "string"},
  { field: 'email', headerName: 'Email', width: 100, type: "string" },
  { field: 'phone', headerName: 'Phone', width: 100, type: "string" },
  { field: 'createdAt', headerName: 'Create At', width: 100 , type: "string"},
  {
      field: "verified", headerName: "Verified", width: 100, type: "boolean", 
  },

];
const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
        <div className='info'>
          <h1>users</h1>
          <button onClick={()=> setOpen(true)}>add user</button>
        </div> 
        <DataTable  rows={userRows} columns={columns} url= "users"/>
        {open && <AddUser setOpen= {setOpen} slug="user" columns={columns}/>}
    </div>
  )
}

export default Users