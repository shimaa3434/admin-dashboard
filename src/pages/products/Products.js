import React from 'react'
import './products.css'
import { useState } from 'react'
import DataTable from '../../compenents/dataGrid/DataTable'
import AddUser from '../../compenents/addUser/AddUser'
import {products} from '../../data'

const columns = [
  {field: "id", headerName: "Id", width: 100},
  { field: 'image', headerName: 'Image', width: 100,
  renderCell : (params)=> {
     return <img src={params.row.img || "/noavatar.png"}/>
 }},
 { field: 'title', headerName: 'Title', width: 100 , type: "string"},
 { field: 'color', headerName: 'Color', width: 100 , type: "string"},
 { field: 'price', headerName: 'Price', width: 100 , type: "string"},
 { field: 'producer', headerName: 'Producer', width: 100 , type: "string"},
 { field: 'createdAt', headerName: 'Create At', width: 100 , type: "string"},
 {field: "inStock", headerName: "InStock", width: 100, type: "boolean"}, 

]


const Products = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='products'>
        <div className='info'>
          <h1>Products</h1>
          <button onClick={()=> setOpen(true)}>add product</button>
        </div> 
        <DataTable  rows={products} columns={columns} url= "products"/>
        {open && <AddUser setOpen= {setOpen} slug="products" columns={columns}/>}
    </div>
  )
}

export default Products