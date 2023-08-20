import React from 'react'
import './Details.css'
import Context from '../../Context'
import { useContext } from 'react'

export default function Details(props) {
  
  let { counter } = useContext(Context);

 return (
    <header>
        <p className='m-0 fs-5'> Du hast <span className='betonung'>{counter}</span> von <span className='betonung'>{props.listLength}</span> Aufgaben bearbeit und erfolgreich geschafft.</p>
    </header>
  )
}
