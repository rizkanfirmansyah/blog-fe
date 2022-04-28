import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreateBlog, DetailBlog, Home } from "..";
import { Footer, Header } from "../../components";
import "./mainapp.scss";

const MainApp = () => {
  return (
    <div className="main-app-wrapper">
      <Header />
      <div className="content-wrapper">
        <Routes>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
