import { useNavigate } from "react-router-dom";
function Menupage_pizza2() {
  const navigate = useNavigate();
  function handleClick() {
    alert("이미지가 선택되었습니다.");
    navigate(-1);
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~반올림피자~입니다</h3>
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + `assets/pizza2-1.jpg`}
      />
      <img
        onClick={handleClick}
        src={process.env.PUBLIC_URL + `assets/pizza2-2.jpg`}
      />
    </div>
  );
}

export default Menupage_pizza2;
