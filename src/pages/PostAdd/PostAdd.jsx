import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import './PostAdd.scss';

const PostAdd = () => {
  //const [usersData, setUsersData] = useState();
  const [newPost, setNewPost] = useState({ content: '' });

  const navigate = useNavigate();

  const newPostInput = event => {
    const { value, id } = event.target;
    setNewPost({ ...newPost, [id]: value });
    console.log({ [id]: value });
  };

  const postValidation = newPost.content.trim() === '' ? true : false;
  /* 통신 연습
  useEffect(() => {
    fetch('http://10.58.52.111:3000/user/signin', {
      method: 'GET',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiZW1haWwxMEBnbWFpbC5jb20iLCJpYXQiOjE2OTIzMjUxMTZ9.6ywafXrjDMVZh_VJQzv-CIsjun8prr-CwLuE2c0L-cg',
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(name => {
        setUsersData(name.userName);
      });
  }, []);
*/
  const goToPostList = () => {
    alert('포스트 리스트 페이지로 이동하시겠습니까?');
    navigate('/post-list');
  };

  const goToPostDone = () => {
    navigate('/post-done');
    fetch('http://10.58.52.111:3000/thread/upload', {
      method: 'Post',
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImVtYWlsIjoiZW1haWwxMEBnbWFpbC5jb20iLCJpYXQiOjE2OTIzMjUxMTZ9.6ywafXrjDMVZh_VJQzv-CIsjun8prr-CwLuE2c0L-cg',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        //userName: usersData.userName,
        content: newPost.content,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  //console.log(usersData);

  return (
    <div className="rootPostAdd">
      <h1>포스트 추가 페이지</h1>
      <div className="postAdd">
        <div className="postAddContainer">
          <div className="postAddPublish">
            <img
              className="profileAddThumb"
              src="/images/Pic.png"
              alt="프로필 사진"
            />
            <div className="postAddContent">
              <p className="postAddContentName" id="userName">
                Name
              </p>
              <textarea
                className="postAddContentText"
                placeholder="스레드를 시작하세요."
                onChange={newPostInput}
                id="content"
              />
            </div>
          </div>
          <div className="postAddAction">
            <Button type="secondary" navigate={goToPostList} text="취소" />
            <Button
              type="primary"
              navigate={goToPostDone}
              validation={postValidation}
              text="게시"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
