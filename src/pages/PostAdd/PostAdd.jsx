import React from 'react';
import '../../styles/reset.scss';
import '../../styles/common.scss';
import '../PostAdd/PostAdd.scss';

const PostEditing = () => {
  return (
    <div className="rootPostAdd">
      <h1>포스트 추가 페이지</h1>
      <div className="postAdd">
        <div className="postAddContainer">
          <div className="postAddPublish">
            <img className="profileAddThumb" src="images/Pic.png"></img>
            <div className="postAddContent">
              <p className="postAddContentName">Name</p>
              <textarea
                className="postAddContentText"
                placeholder="내용 수정하기"
              ></textarea>
            </div>
          </div>
          <div className="postAddAction">
            <button className="postAddButtonLine">취소</button>
            <button className="postAddButtonFill">게시</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostEditing;
