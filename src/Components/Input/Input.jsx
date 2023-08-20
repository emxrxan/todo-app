import { React, forwardRef } from 'react'
import './Input.css'

export default forwardRef(function Input(props, ref) {
  return (
    <div className='input-container'>
      <label className="form-label ps-1">{props.label_content}</label>
      <input ref={ref} form={props.form} type="text" className="form-control border-black" placeholder={props.placeholder} name={props.name} />
    </div>
  )
})
