import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Gpt from './components/Gpt.jsx'

const companiesData = [
  {
    id:0,
    company: "Tcs",
    employees: 40000,
    locations:432,
  },
  {
    id:1,
    company: "IBM",
    employees: 4000,
    locations:43,
  },
  {
    id:2,
    company: "Accencture",
    employees: 23000,
    locations:412,
  },
  {
    id:3,
    company: "Infosys",
    employees: 400000,
    locations:4321,
  },
  {
    id:4,
    company: "Cyient",
    employees: 30000,
    locations:342,
  }
]

function App() {
  const [count, setCount] = useState(0)
  const [username, setUsername ] = useState("")
  const [password, setPass ] = useState("")
  const [show , setShow] = useState(true )
  const [cpny, setCompany] = useState(companiesData[0].company)
  const onUsernameChange = (event) =>{
    setUsername(event.target.value)
  }

  const onChangePass = event =>{
    setPass(event.target.value)
  }

const onShowPass = () =>{
  setShow(prevState => !prevState)
}

const type = !show ? "text": "password"
const onChangeCompany = (event) =>{
  setCompany(event.target.value)
  

}

console.log(cpny)
  return (
    
      <div className='main-contaier'>
        {/* <Gpt /> */}
        <form className='form-container'>
        <h1 className='login-text'>Signup</h1>
            {/* <div className='input-container'>
              <label className='text' htmlFor='name'>Username:</label>
              <input placeholder='enter email id ' className='user-input border-right' onChange={onUsernameChange} type='email' id="name"/>
            </div>
          
          
          <div className='input-container'>
          <label className='text'   htmlFor='pass'>Password:</label>
          <div className='password-continer'>
          <input onChange={onChangePass}  className='user-input-1 ' placeholder = "enter your password here" type={type} id="pass"/>  
          <button type='none' className='lock-button' >
            {
              show? <svg   xmlns="http://www.w3.org/2000/svg" width="24" 
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lock-keyhole icon"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/>
              </svg> : <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"   stroke-linejoin="round" class="icon lucide lucide-unlock-keyhole"><circle cx="12" cy="16" r="1"/><rect x="3" y="10" width="18" height="12" rx="2"/><path d="M7 10V7a5 5 0 0 1 9.33-2.5"/></svg>
            }
            
          </button>
          
          </div>
          
          <input onChange={onShowPass} type="checkbox" />
          <label>Show</label>
          </div>
          
            <div className='signin-button-container'>
              <div className='remember-box'>
                <input type='checkbox' />
                <p className='remember-text'> Remember me</p>
              </div>
              <button className='signin-button'>SignIn</button>    
            </div> */}
        {/* <a className='forgor-pass'>Forgot Password or Username?</a> */}

        <label>First Name: </label>
        <input type="text"/>
        
            <select onChange={onChangeCompany} >
              {companiesData.map(each=>
                <option key={each.id} >{each.company}</option>

                )}
            </select>
      </form>
      </div>
    
  )
}

export default App

