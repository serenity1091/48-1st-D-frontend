import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import PostEditing from './pages/PostEditing/PostEditing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/postediting" element={<PostEditing />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
