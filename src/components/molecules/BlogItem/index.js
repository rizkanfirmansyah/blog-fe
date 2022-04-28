import React from "react";
import { Button } from "../../atoms";
import { Gap } from "../../../components";
import './blogitem.scss'
import {useNavigate} from 'react-router-dom'

const BlogItem = (props) => {
  const history = useNavigate();
  const {image, title, name, date, body} = props;
  return (
    <div className="blog-item">
      <img className="image-thumb" src={image} alt="post" />
      <div className="content-detail">
        <p className="title">{title}</p>
        <p className="author">{name} - {date}</p>
        <p className="body">{body}</p>
        <Gap height={20} />
        <Button title="View Detail" onClick={() => history('/detail-blog')}/>
      </div>
    </div>
  );
};

export default BlogItem;
