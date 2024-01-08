import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../PostAdd/PostAdd.scss';

const PostAdd = () => {
  const [newPost, setNewPost] = useState({
    content: '',
  });

  const navigate = useNavigate();
  const createAt = new Date();
  //로그인된 nickName값 가져오기
  const nickName = ({ name }) => {
    console.log(name);
  };
  //여기 콘솔 시간과 newPostInput 함수에서의 시간와 미묘하게 다름
  console.log(createAt);

  const newPostInput = event => {
    const { value, id } = event.target;
    setNewPost({ ...newPost, [id]: value, createAt });
    console.log({ [id]: value, createAt });
  };

  const postValidation = newPost.content.trim() === '' ? true : false;

  const goToPostList = () => {
    navigate('/post-list');
  };
  const goToPostDone = () => {
    if (postValidation === false) {
      navigate('/post-done');
    } else {
      alert('게시한 글이 없습니다. 확인해주세요.');
    }
  };

  return (
    <div className="postAdd">
      <h1>포스트 추가 페이지</h1>
      <div className="postAddContainer">
        <div className="postAddPublish">
          <img
            className="profileAddThumb"
            src="images/Pic.png"
            alt="프로필 사진"
          />
          <div className="postAddContent">
            <p className="postAddContentName">{nickName}Name</p>
            <textarea
              className="postAddContentText"
              placeholder="스레드를 시작하세요."
              onChange={newPostInput}
              id="content"
            />
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
