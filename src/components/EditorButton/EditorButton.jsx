import { useNavigate } from 'react-router-dom';
import './EditorButton.scss';

{
  /*TODO 로그인 여부에 따른 글쓰기 버튼 활성화/비활성화*/
}
const EditorButton = () => {
  const navigate = useNavigate();

  const EditorButtonOnClick = () => {
    navigate('/post-add');
  };
  return (
    <div className="editorBox">
      <button className="editorButton" onClick={EditorButtonOnClick}>
        글 쓰기
      </button>
      ;
    </div>
  );
};

export default EditorButton;
