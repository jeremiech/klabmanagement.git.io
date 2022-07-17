import { useState } from 'react';
import Todos from './Todos';
import axios from 'axios';
import Forms from '../Forms';
const Todo = () => {
  const [ todos , setTodos ] = useState("")
  const [ input, setInput ] = useState("")
  const [ edit,setEdit ] = useState (null)
  const url = "http://localhost:8000/Tasks"

  const onDelete = (id) => {
    axios.delete(`${url}/${id}`).then((res)=>{
      setTodos(res.data);
    })
    // setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className='container'>
      <header className = 'header'>
       <p>To do App</p>
      </header>
      <Forms todos= { todos } input={ input } setTodos= { setTodos } setInput={ setInput } edit={edit} setEdit={setEdit}/>
     { todos.length > 0 ? <Todos todos={todos} onDelete={onDelete} edit={edit} setEdit={setEdit}/>  : 'No tasks yet'}
    </div>
  )
}

export default Todo;