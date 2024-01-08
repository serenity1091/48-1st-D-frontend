import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../PostEditing/PostEditing.scss';

const PostEditing = () => {
  const navigate = useNavigate();

  const goToPostList = () => {
    navigate('/post-list');
  };

  const goToPostDone = () => {
    navigate('/post-done');
  };

  return (
    <div className="postEditing">
      <h1>포스트 수정 페이지</h1>
      <div className="postContainer">
        <div className="postPublish">
          <img
            className="profileThumb"
            src="images/Pic.png"
            alt="프로필 사진"
          />
          <div className="postContent">
            <p className="postContentName">Name</p>
            <textarea
              className="postContentText"
              placeholder="내용 수정하기"
            ></textarea>
          </div>
        </div>
        <div className="postAction">
          <button className="buttonLine" onClick={goToPostList}>
            취소
          </button>
          <button className="buttonFill" onClick={goToPostDone}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};
export default PostEditing;
