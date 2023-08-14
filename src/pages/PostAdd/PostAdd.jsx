import React, { useState } from 'react';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import '../PostAdd/PostAdd.scss';
import PostDone from '../PostAdd/components/PostDone';
import PostBox from './components/PostBox';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const [postList, setPostList] = useState([]);
  const [newPost, setNewPost] = useState('');

  //nickName 회원가입 페이지에 import, props 가져오기
  const nickNameCheck = ({ name }) => {
    console.log(name);
  };

  const handlePost = event => {
    event.preventDefault();
    if (newPost.trim() === '') {
      return;
    }
    setPostList([...postList, newPost]);
    setNewPost('');
  };

  const newPostInput = event => {
    setNewPost(event.target.value);
  };

  const navigate = useNavigate();
  const goToPostList = () => {
    navigate('/post-list');
  };
  const goToPostDone = () => {
    navigate('/post-done');
  };

  return (
    <div className="postAdd">
      <h1>포스트 추가 페이지</h1>
      <div className="postAddContainer">
        <div className="postAddPublish">
          <img className="profileAddThumb" src="images/Pic.png" />
          <div className="postAddContent" onSubmit={handlePost}>
            <p className="postAddContentName">{nickNameCheck}Name</p>
            <textarea
              className="postAddContentText"
              placeholder="스레드를 시작하세요."
              onChange={newPostInput}
            ></textarea>
          </div>
        </div>
        <div className="postAddAction">
          <button className="postAddButtonLine" onClick={goToPostList}>
            취소
          </button>
          <button
            className="postAddButtonFill"
            type="submit"
            onClick={goToPostDone}
          >
            게시
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostAdd;
