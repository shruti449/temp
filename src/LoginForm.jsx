import { useState , useDispatch } from 'react'
import { useNavigate } from "react-router-dom"
import './components/LoginForm.css'

const LoginForm=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log('Email',email)
        console.log('password',password)
        navigate("categories")
    }
    return(
        <div className='login-container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>login</h2>
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className='form-group'>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginForm