import React from 'react'
import { Fragment } from 'react'

export default function Button(props) {
  return (
    <Fragment>
        <button onClick={props.click} type="button" className="btn btn-sm btn-light me-2 border-black" form={props.form}>{props.content}</button>
    </Fragment>
  )
}
