import React from "react";
import { RegisterBg } from "../../assets";
import { Gap, Link } from "../../components";
import "./detailBlog.scss";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const history = useNavigate();
  return (
    <div className="detail-blog-wrapper">
      <Gap height={20} />
      <img className="img-cover" src={RegisterBg} alt="thumbnail" />
      <h1 className="blog-title">Detail Blog</h1>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Aute deserunt dolor magna ullamco culpa. Nostrud aute eu labore ipsum
        proident excepteur nostrud velit est dolor. Voluptate nisi culpa nisi
        fugiat aute aliquip qui reprehenderit culpa nulla non eu. Sint laboris
        ipsum incididunt ullamco adipisicing.
      </p>
      <Gap height={20} />
      <Link title="Kembali ke Home" onClick={() => history("/")} />
    </div>
  );
};

export default DetailBlog;
