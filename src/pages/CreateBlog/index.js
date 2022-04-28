import React from "react";
import { Button, Gap, Input, Link, TextArea, Upload } from "../../components";
import './createBlog.scss'
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const history = useNavigate();
  return (
    <div className="blog-post">
      <Link title="kembali" onClick={() => history('/')}/>
      <p className="title">Create New Blog</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default CreateBlog;
