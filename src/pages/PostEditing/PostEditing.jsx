import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../PostAdd/components/Button';
import '../PostEditing/PostEditing.scss';

const PostEditing = () => {
  const [usersData, setUsersData] = useState();
  const [post, setPost] = useState({
    content: '기존 content',
  });

  let { postId } = useParams();

  const navigate = useNavigate();

  const postInput = event => {
    const { value, id } = event.target;
    setPost({ ...post, [id]: value });
    console.log({ [id]: value });
  };

  const postEditingValidation = post.content === setPost.content ? true : false;

  useEffect(() => {
    fetch(`http://10.58.52.111:3000/${postId}`, { method: 'GET' })
      .then(res => res.json())
      .then(name => {
        setUsersData(name.userName);
        setPost(name.content);
      });
  }, []);

  const goToPostList = () => {
    alert('포스트 수정을 취소하시겠습니까?');
    navigate('/post-list');
  };

  const goToPostDone = () => {
    navigate('/post-done');
    fetch('http://10.58.52.111:3000/thread/(아이디값)', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userName: usersData,
        content: post.content,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="rootPostEditing">
      <h1>포스트 수정 페이지</h1>
      <div className="postEditing">
        <div className="postContainer">
          <div className="postPublish">
            <img
              className="profileThumb"
              src="images/Pic.png"
              alt="프로필 사진"
            />
            <div className="postContent">
              <p className="postContentName" id="nickName">
                {/*usersData*/}
              </p>
              <textarea
                className="postContentText"
                placeholder="내용 수정하기"
                onChange={postInput}
                id="content"
                value={post.content}
              ></textarea>
            </div>
          </div>
          <div className="postAction">
            <Button type="secondary" navigate={goToPostList} text="취소" />
            <Button
              type="primary"
              navigate={goToPostDone}
              validation={postEditingValidation}
              text="게시"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostEditing;
