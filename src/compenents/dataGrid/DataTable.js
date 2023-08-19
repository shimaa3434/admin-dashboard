import React from 'react'
import './DataTable.css'
import { DataGrid, GridColDef,  GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';


    
const DataTable = ({rows, columns, url}) => {
    
    const handelDelete = (id)=>{
        console.log(id)
        // const indexItem = rows.filter((i)=> i.id !== id)
        // return indexItem
    }
    
    const ActionColumn = { field: 'actions', headerName: 'actions', width: 120,
    renderCell : (params)=> {
       return (
        <div className='actions'>
            <Link to= {`/${url}/${params.row.id}`} className='view'><img src='./view.svg'/></Link>
            <div className='delete' onClick={()=> handelDelete(params.row.id)}><img src='./delete.svg'/></div>
        </div>
       )
   }}
  return (
    <div className='dataTable'>
         <DataGrid 
         className='data_grid'
        rows={rows}
        columns={[...columns, ActionColumn]}
          initialState={{
            pagination: {
                paginationModel: {
                    pageSize: 10,
                },
            },
          }} 
          slots={{
            toolbar: GridToolbar
          }}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          slotProps={{
            toolbar : {
                showQuickFilter : true,
                quickFilterProps : {debounceMs : 500}
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick/>
    </div>
  )
}

export default DataTable