import React, { useEffect, useState } from 'react';
import './PostList.scss';

const PostList = () => {
  return (
    <>
      <div className="PostList">
        <div className="container">
          <article className="posts">
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

            <EditorButton />
          </article>
        </div>
      </div>
    </>
  );
};

const Post = () => {
  return (
    <div className="post">
      <PostHeader />
      <PostContent />
      <PostFooter />
    </div>
  );
};

const PostHeader = () => {
  return (
    <div className="postHeader">
      <div className="userProfile">jeonmye</div>
      <div className="DateAndDeleteWrap">
        <div className="postCreatedDate">23.8.13</div>
        <div className="postDeleteButton">삭제</div>
      </div>
    </div>
  );
};

const PostContent = () => {
  return (
    <div className="postContent">
      일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는 사람들의
      경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고 믿는다. 이 현상은
      1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서
      명명되었다.
    </div>
  );
};

const PostFooter = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [commendCount, setCommendCount] = useState(0);
  return (
    <div className="postFooter">
      <div className="likeAndCommendWrap">
        <div className="likeText">좋아요</div>
        <div className="likeCount">{likeCount}</div>
        <div className="commendText">댓글</div>
        <div className="commendCount">{commendCount}</div>
      </div>
      <div className="likeButton">
        <img src="/images/State=Default-3.png"></img>
      </div>
    </div>
  );
};

const EditorButton = () => {
  return (
    <div className="editorBox">
      <button className="editorButton">글 쓰기</button>;
    </div>
  );
};

export default PostList;
