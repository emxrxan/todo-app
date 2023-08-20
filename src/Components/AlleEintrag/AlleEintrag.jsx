import { React, useContext } from 'react'
import Eintrag from '../Eintrag/Eintrag'
import './AlleEintrag.css'
import Context from '../../Context'

export default function AlleEintrag() {

  const { contentList, setContentList } = useContext(Context);
  let {counter, setCounter} = useContext(Context);

  const deleteTodo = (id) => {
    
    let result = counter;
    const updateContentList = contentList.filter((element) => element.id !== id);
    const updateCounter = contentList.filter((element) => element.id === id);
    
    if(updateCounter[0].checked){
      result--;
    }

    setCounter(result);
    setContentList(updateContentList);
  }

  return (
    <div className='AlleEintrag-Container'>
      {
        contentList.map((element)=>{
          return <Eintrag content={element.todo} key={element.todo} id={element.id} delete={() => deleteTodo(element.id)}/>
        })
      }
    </div>
  )
}
