import { React, useRef, useContext } from 'react'
import './Form.css'
import Input from '../Input/Input'
import Button from '../Button/Button'
import Context from '../../Context'

export default function Form() {

  const { contentList, setContentList } = useContext(Context);
  const input_ref = useRef("");

  const add = () => {
    const newTodo = (input_ref.current.value).toLowerCase();
    const updateContentList = [...contentList];

    if(updateContentList.find((element) => element.todo === newTodo) || newTodo === ""){
      alert(`TODO: "${newTodo}" existiert bereits oder Leere Todo's werden nicht akzeptiert!`);
    } else {
      updateContentList.push({ todo: newTodo, checked: false, id: Date.now() });
    setContentList(updateContentList);
    }

    input_ref.current.value = "";
  }

  return (
    <form className='form-container' method='get'>
      <Input ref={input_ref} form="form-container" placeholder="Aufgabe ..." name="input-aufgabe" label_content="Neuer Aufgabeneintrag"/>
      <div className="button-container">
        <Button form="form-container" content="Add" click={() => add()}/>
      </div>
    </form>
  )
}
