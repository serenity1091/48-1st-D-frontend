import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUpDone.scss';

const SignUpDone = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };

  return (
    <div className="signUpDone">
      <div className="btnPrev">
        <button onClick={goToLogin}>뒤로</button>
      </div>
      <div className="boxWrap">
        <p className="checkImage"></p>
        <p className="alert">회원 가입되었습니다!</p>
        <span>이제 로그인해주세요.</span>
      </div>
      <button className="btnConfirm" onClick={goToLogin}>
        확인
      </button>
    </div>
  );
};

export default SignUpDone;
