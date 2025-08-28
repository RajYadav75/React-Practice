import React from 'react'

export default function Usercontrol(props) {
  return (
    <div>
        <label className='form-label fw-bold'>{props.label}</label>
        <div>
            <input type={props.type} className='form-control'/>
        </div>
    </div>
  )
}
