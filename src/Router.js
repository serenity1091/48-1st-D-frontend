import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import SignUpDone from './pages/SignUpDone/SignUpDone';
import PostList from './pages/PostList/PostList';
import PostAdd from './pages/PostAdd/PostAdd';
import PostEditing from './pages/PostEditing/PostEditing';
import PostDone from './pages/PostAdd/components/PostDone';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-done" element={<SignUpDone />} />
        <Route path="/post-list" element={<PostList />} />
        <Route path="/post-add" element={<PostAdd />} />
        <Route path="/post-editing" element={<PostEditing />} />
        <Route path="/post-done" element={<PostDone />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
