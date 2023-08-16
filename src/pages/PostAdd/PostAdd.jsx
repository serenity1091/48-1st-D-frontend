import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './components/Button';
import './PostAdd.scss';

const PostAdd = () => {
  const [usersData, setUsersData] = useState();
  const [newPost, setNewPost] = useState({
    content: '',
  });

  const navigate = useNavigate();

  const newPostInput = event => {
    const { value, id } = event.target;
    setNewPost({ ...newPost, [id]: value });
    console.log({ [id]: value });
  };

  const postValidation = newPost.content.trim() === '' ? true : false;

  useEffect(() => {
    fetch('data/userData.json', { method: 'GET' })
      .then(res => res.json())
      .then(name => {
        setUsersData(name[2].nickName);
      });
  }, []);

  const goToPostList = () => {
    alert('포스트 리스트 페이지로 이동하시겠습니까?');
    navigate('/post-list');
  };

  const goToPostDone = () => {
    navigate('/post-done');
    fetch('data/userData.json', {
      //method: 'Post',
      //headers: {
      //'Content-Type': 'application/json',
      //},
      //body: JSON.stringify({
      //name: nickName,
      // content: newPost.content,
    }) //,
      //})
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };
  console.log(usersData);

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
              <p className="postAddContentName" id="nickName">
                {usersData}
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
