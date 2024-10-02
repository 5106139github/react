
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../assets/Styles/users.css'


const Users = () => {
  let [data,setdata] = useState()
  
  useEffect(() => {
    axios.get('http://localhost:4000/users').then((ele) => setdata(ele.data))
  },[data])
let navigate = useNavigate()
  let iddata = (id) => {
    navigate(`/adminportal/userslogin/${id}`)
  }
  return (
    <>
<div className="users">
  {data && data.map((ele) => {
    let {id,firstname ,lastname} = ele
    return(
      <>
      <div className="container">
        <div className="main"><button onClick={()=>iddata(id)}><span>{firstname}</span>-<span>{lastname}</span></button></div>
      </div>
      </>
    )
  })}
</div>
    </>
  )
}

export default Users
