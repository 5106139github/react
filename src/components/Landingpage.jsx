

import { useNavigate} from 'react-router-dom'
import { useRef } from 'react'
import '../assets/Styles/landingpage.css'

const Main = () => {
    let navigate = useNavigate()
    let user = useRef()
    let pass = useRef()
    let validation = (e) => {
    e.preventDefault()
        let userinp = user.current
        let pwdinp = pass.current
        if(userinp.value === 'lava' && pwdinp.value === '123'){
            navigate('/adminportal')
        }else{
            let err = 'border : 2px red solid'
            userinp.style.cssText = err
            pwdinp.style.cssText = err
        }
        
    }
  return (
   <>
    <div className="form">
    <div className="form-container">
    <form onSubmit={validation}>
        <input ref={user} type="text" placeholder='User' />
        <input ref={pass} type="text"  placeholder='password'/>
        <button>Login</button>
    </form>
    </div>
    </div>
   </>
  )
   }

export default Main
