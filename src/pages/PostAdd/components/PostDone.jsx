import React from 'react';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import './PostDone.scss';

const PostDone = () => {
  return (
    <div className="modalPostDone">
      <h1>포스트 게시 완료 페이지</h1>
      <div className="modal">
        <img className="modalImg" src="images/Check.png" />
        <div className="modalPost">
          <p className="modalContent">게시되었습니다.</p>
          <p className="goToPostList">보기</p>
        </div>
      </div>
    </div>
  );
};

export default PostDone;
