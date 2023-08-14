import React from 'react';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import '../PostEditing/PostEditing.scss';

const PostEditing = () => {
  return (
    <div className="rootPostEditing">
      <h1>포스트 수정 페이지</h1>
      <div className="postEditing">
        <div className="postContainer">
          <div className="postPublish">
            <img className="profileThumb" src="images/Pic.png"></img>
            <div className="postContent">
              <p className="postContentName">Name</p>
              <textarea
                className="postContentText"
                placeholder="스레드를 시작하세요."
              ></textarea>
            </div>
          </div>
          <div className="postAction">
            <button className="buttonLine">취소</button>
            <button className="buttonFill">게시</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostEditing;
