import React from 'react'
import Single from '../../compenents/single/Single'
import {singleUser} from '../../data'

const User = () => {
  return (
    <div className='user'>
      <Single {...singleUser}/>
    </div>
  )
}

export default User