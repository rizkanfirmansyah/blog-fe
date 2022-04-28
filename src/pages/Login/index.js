import React from 'react'
import { RegisterBg } from "../../assets";
import {Button, Gap, Input, Link} from '../../components'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const history = useNavigate()
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="background img"/>
      </div>
      <div className="right">
        <p className="title"> Login</p>
        <Input label="Email" placeholder="Email"/>
        <Gap height="18px"/>
        <Input label="Password" placeholder="Password" type="password"/>
        <Gap height="50px"/>
        <Button title="Login" onClick={() => history('/')}/>
        <Link title="Kembali ke Register"  onClick={() => history('/register')}/>
      </div>
    </div>
  )
}

export default Login