import { useNavigate } from "react-router-dom";
function Menupage_chicken1() {
  const navigate = useNavigate();
  function handleClick() {
    alert("이미지가 선택되었습니다.");
    navigate(-1);
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~미파닭~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + `assets/chicken1-1.jpg`}
      />
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + `assets/chicken1-2.jpg`}
      />
    </div>
  );
}

export default Menupage_chicken1;
