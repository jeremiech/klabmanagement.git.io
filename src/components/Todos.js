import { FaTimes,FaEdit } from 'react-icons/fa';

const Todos = ({ todos ,onDelete,edit,setEdit, onComplete }) => {

  const handleEdit = ({id}) =>{
    if(!edit){
      const findTodo = todos.find((todo) => todo.id === id )
      setEdit(findTodo);
    } else{
      setEdit(null)
    }

  }

  return (
    <div className='task'>
      {todos.map((todo)=> (
        <h5 key={todo.id}>
          {todo.title}
          <FaEdit className='edit' onClick={()=> handleEdit(todo)}/>
          <FaTimes style={{color:'red', cursor:'pointer' ,float:'right'}} onClick = {() => onDelete (todo.id)} />
        </h5>
        ))} 
    </div>
  )
}

export default Todos;