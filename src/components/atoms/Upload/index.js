import React from 'react'
import { RegisterBg } from '../../../assets';
import './upload.scss';

const Upload = () => {
  return (
    <div className="upload">
        <img className="preview" src={RegisterBg} alt="upload preview" />
        <input type="file"/>
    </div>
  )
}

export default Upload