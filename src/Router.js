import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import PostAdd from './pages/PostAdd/PostAdd';
import PostDone from './pages/PostAdd/components/PostDone';
import PostEditing from './pages/PostEditing/PostEditing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/post-add" element={<PostAdd />} />
        <Route path="/post-done" element={<PostDone />} />
        <Route path="/post-editing" element={<PostEditing />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
