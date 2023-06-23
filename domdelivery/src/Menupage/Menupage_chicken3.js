import { useNavigate } from "react-router-dom";
function Menupage_chicken3() {
  const navigate = useNavigate();
  function handleClick() {
    alert("이미지가 선택되었습니다.");
    navigate(-1);
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~BHC~입니다</h3>
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + `assets/chicken3-1.jpg`}
      />
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + `assets/chicken3-2.jpg`}
      />
    </div>
  );
}

export default Menupage_chicken3;
