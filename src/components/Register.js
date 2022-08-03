import { useState } from 'react'
// import axios from 'axios'
import ShortUniqueId from 'short-unique-id';
import {createEmployees} from '../features/Employees'
import { useDispatch,useSelector } from 'react-redux';
import { employeeSelector } from '../features/Employees';

const Register = () => {
  const [ inputName,setInputName ] = useState('')
  const [ inputEmail,setInputEmail ] = useState('')
  const [ inputPhone,setInputPhone ] = useState('')

  const dispatch=useDispatch()
  // const [ inputPassword,setInputPassword ] = useState('')
  const[positon,setInputPositon]=useState('')
  const uid = new ShortUniqueId();

  const url = "http://localhost:8000/Employee";
  const {employeeList}=useSelector(employeeSelector)  
  console.log(employeeList)
  const handlePosition=e=>{
    setInputPositon(e.target.value)
  }
  const onChange1 = (e) =>{
    setInputName(e.target.value);
  }
  const onChange2 = (e) =>{
    setInputEmail(e.target.value);
  }
  const onChange3 = (e) =>{
    setInputPhone(e.target.value);
  }
  // const onChange4 = (e) =>{
  //   setInputPassword(e.target.value);
  // }


const handleSubmit=(e)=>{
e.preventDefault()
const data={
      id: uid(),
      name:inputName,
      email:inputEmail,
      phone:inputPhone,
      position:positon
}
console.log('found data',data)
dispatch(createEmployees(data))
}




    

  return (
    <div className='register'>
         
        <div className="container">
        <div className='dheader'>
            <h3>Record Employee</h3>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text"  value={inputName} onChange={onChange1}/>
                <label>Email</label>
                <input type="email" value={inputEmail} onChange={onChange2}/>
                <label>Phone</label>
                <input type="text" value={inputPhone} onChange={onChange3}/>
                <label>Task</label>
                <input type="text" value={positon} onChange={handlePosition}/>
                <button className='btn' type='onSubmit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Register