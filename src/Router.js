import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import PostAdd from './pages/PostAdd/PostAdd';
import PostEditing from './pages/PostEditing/PostEditing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/postadd" element={<PostAdd />} />
        <Route path="/postediting" element={<PostEditing />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
