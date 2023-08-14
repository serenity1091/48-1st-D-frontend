import React from 'react';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import '../PostEditing/PostEditing.scss';

const PostEditing = () => {
  return (
    <div className="rootPostEditing">
      <h1>포스트 추가 페이지</h1>
      <div className="PostEditing">
        <div className="PostContainer">
          <div className="PostPublish">
            <img className="ProfileThumb" src="images/Pic.png"></img>
            <div className="PostContent">
              <p className="PostContentName">Name</p>
              <textarea className="PostContentText"></textarea>
            </div>
          </div>
          <div className="PostAction">
            <button className="Button_line">취소</button>
            <button className="Button_fill">게시</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostEditing;
