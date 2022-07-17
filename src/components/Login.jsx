import React from 'react'
import {useState} from 'react'
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {ImFacebook} from 'react-icons/im'
import {FaInstagram} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Login=()=> {
// const [input2,setInput2]=useState('')
// const [paswd,setPswd]=useState('')
// const [logRadio,setLogRadio]=useState('')
const [inputs,setInputs]=useState({})
function handleInputChange(e){
const name=e.target.name
const value=e.target.value
setInputs(val=>({...val,[name]:value}))
}


const navigate=useNavigate()

// const onchangeName=(e)=>{
//     setInput2(e.target.value)
// }
// const onChangePswd=e=>{
//     setPswd(e.target.value)
// }
// const handleRadio=(e)=>{
//     setLogRadio(e.target.value)

// }
const onSubmiting=(e)=>{
    e.preventDefault()
    if(inputs.unm==='admin' && inputs.psw==='123'){
        localStorage.setItem('userName',inputs.unm)
        localStorage.setItem('pasword',inputs.psw)
        navigate('/admin')


    }else if(inputs.unm==='user' && inputs.psw==='123'){
        localStorage.setItem('userName',inputs.unm)
        localStorage.setItem('pasword',inputs.psw)
        navigate('/account')
    }
else{    alert('wrong password or username')}

}
const onLogout=()=>{
    localStorage.clear()
    window.location.replace('http://localhost:3000/admin')
}
  return (
    <>
    <div className="container logs">
    <h2 style={{fontSize:"30px"}}>Login Page</h2>
        <form onSubmit={onSubmiting}>
        <label className='lb'>username</label>
        <input type='text' name='unm' className='logInput' value={inputs.unm} onChange={handleInputChange}/>
        {/* <label className='lb'>Login as</label>
        <input type='radio' value={logRadio} onChange={handleRadio} name='usa'/>
        <input type='radio' value={logRadio} onChange={handleRadio} name='usa'/> */}

        <label className='lb'>password</label>
        <input type='password' className='logInput' value={inputs.psw} name='psw' onChange={handleInputChange}/>
        <input type='submit' value='Sign in' className='btn btn-success bb' />

        </form>

        <div className="blogin">
            <Link to="/logout" onClick={onLogout}>Logout</Link>
            <Link to="/account">Create Account</Link>
            {/* <a href="#">Logout</a> */}


        </div>
        <div className="social">
        <a href='https://www.facebook.com'><ImFacebook className='ifacebook' /></a>
        <a href='https://www.instagram.com'><FaInstagram  className='iInsta'/></a>
        <a href='https://www.whatsapp.com'><BsWhatsapp className='iWhat'/></a>
        </div>
    </div>
    </>
    )
}

export default Login