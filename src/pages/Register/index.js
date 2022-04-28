import React from "react";
import { RegisterBg } from "../../assets";
import "./style.scss";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const history = useNavigate();
  return (
    <div className="main-page">
      <div className="left">
        <img src={RegisterBg} className="bg-image" alt="background img" />
      </div>
      <div className="right">
        <p className="title">Form Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18} />
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" type="password" />
        <Gap height={50} />
        <Button title="Register" onClick={() => history("/login")} />
        <Link title="Kembali ke Login" onClick={() => history("/login")} />
      </div>
    </div>
  );
};

export default Register;
