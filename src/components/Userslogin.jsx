
/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"


const Userslogin = () => {
  let [userref , setuserref] = useState({})
  let ids = useParams()
  let userid = ids.id

  useEffect(() => {
    axios.get(`http://localhost:4000/users/${userid}`).then(ele => setuserref(ele.data.login))
  }, []);
  

  // let username = userref.login.username
  // let password = userref.login.username
  // let {username , password} = userref.login



  let navigate = useNavigate()
  let user = useRef()
  let pass = useRef()
  let validation = (e) => {
  e.preventDefault()
  let userinp = user.current
  let pwdinp = pass.current
  if(userinp.value === userref.username && pwdinp.value === userref.password){



    navigate(`/adminportal/userslogin/userdetails/${userid}`)

    
}  else{
  let err = 'border : 2px red solid'
  userinp.style.cssText = err
  pwdinp.style.cssText = err
}

// if(){
//   navigate('/')
// }
}

return (
      <>
       <div className="form">
       <div className="form-container">
       <form onSubmit={validation}>
           <input ref={user} type="text" placeholder='Enter Username' />
           <input ref={pass} type="text"  placeholder='password'/>
           <button>Login</button>
           <Link to='/adminportal/users' style={{display:'block',textAlign:'center',color:'white'}}>BACK</Link>
       </form>
       </div>
       </div>
      </>
     )

}

export default Userslogin
