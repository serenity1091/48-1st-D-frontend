import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PostDone.scss';

const PostDone = () => {
  const navigate = useNavigate();

  const goToPostList = () => {
    navigate('/post-list');
  };

  return (
    <div className="rootModal">
      <h1>포스트 게시 완료 페이지</h1>
      <div className="modalPostDone">
        <div className="modal">
          <img className="modalImg" src="images/Check.png" alt="게시 체크" />
          <div className="modalPost">
            <p className="modalContent">게시되었습니다.</p>
            <button className="goToPostList" onClick={goToPostList}>
              보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDone;
