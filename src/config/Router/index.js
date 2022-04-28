import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateBlog, DetailBlog, Home, Login, MainApp, Register } from "../../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />}>
          <Route path="/create-blog" element={<CreateBlog />} />
          <Route path="/detail-blog" element={<DetailBlog />} />
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
