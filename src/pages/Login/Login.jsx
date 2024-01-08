import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate('/signup');
  };

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const handleInput = event => {
    const { value, id } = event.target;
    setUserInfo({
      ...userInfo,
      [id]: value,
    });
  };

  useEffect(() => {}, [userInfo]);

  const isValidEmail =
    userInfo.email.includes('@') && userInfo.email.includes('.');
  const isValidPassword = userInfo.password.length >= 5;
  const hasSpecialCharacter = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(
    userInfo.password,
  );
  const isValid = isValidEmail && isValidPassword && hasSpecialCharacter;

  const goToList = () => {
    fetch('data/userData.json')
      .then(response => response.json())
      .then(result => {
        const matched = result.find(
          user =>
            user.email === userInfo.email &&
            user.password === userInfo.password,
        );
        if (matched) {
          //localStorage.setItem('token', result.accessToken);
          navigate('/post-list');
        } else {
          alert('이메일 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  return (
    <div className="login">
      <div className="logoWrap">
        <p className="logoImg"></p>
        <p className="logoText"></p>
      </div>
      <div className="inputBox">
        <input
          type="text"
          id="email"
          value={userInfo.email}
          onChange={handleInput}
          placeholder="이메일"
        />
        <input
          type="password"
          id="password"
          value={userInfo.password}
          onChange={handleInput}
          placeholder="비밀번호"
        />
        <button className="btnLogin" onClick={goToList}>
          로그인
        </button>
        <div className="btnWrap">
          <button className="btnSignUp" onClick={goToSignUp}>
            회원가입
          </button>
          <button className="btnFindPassword">비밀번호 찾기</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
