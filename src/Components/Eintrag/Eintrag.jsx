import { React, useRef, useState, useContext } from 'react'
import './Eintrag.css'
import Button from '../Button/Button'
import Context from '../../Context'

export default function Eintrag(props) {

  const { contentList, setContentList } = useContext(Context);
  let { counter, setCounter } = useContext(Context);

  const input_ref = useRef();
  const [backgroundColor, setBackgroundColor] = useState("bg-warning");
  
  const checkTodo = () =>{
    let result = counter;
    const updateContentList = [...contentList];
    
    updateContentList.forEach((element)=>{
      if(input_ref.current.checked && element.id === props.id){
        setBackgroundColor("bg-success");
        element.checked = true;
        result++
      } else if(result > 0 && element.id === props.id){
        setBackgroundColor("bg-warning");
        element.checked = false;
        result--
      }
    });

    setContentList(updateContentList);
    setCounter(result);
    
  }

  return (
    <div className={`eintrag-container ${backgroundColor}`}>
        <div className='eintrag-label'>
            <input ref={input_ref} onClick={()=>checkTodo()} className="form-check-input m-0 fs-3 lablel-input-hover" type="checkbox" value={props.value} />
            <label className="form-check-label p-2 label-content" >
                {props.content}
            </label>
        </div>
        <div>
            <Button form="form-container" content="Delete" click={props.delete}/>
        </div>
    </div>
  )
}
