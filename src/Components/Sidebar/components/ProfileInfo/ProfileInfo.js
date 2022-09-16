import React from 'react'
import "./profileInfo.css"

function ProfileInfo() {
  return (
    <div className='user-info-container' >
      <img className='user-image' src={require("../../../../assets/user.jpg")}  />
      <p className='user-fullname' >Daniel</p>
     </div>
  )
}

export default ProfileInfo