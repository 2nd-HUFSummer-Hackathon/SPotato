import { useNavigate } from "react-router-dom";
function Menupage_chicken2(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(19000);
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(20000);
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~교촌치킨~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/chicken2-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/chicken2-2.jpg`}
      />
    </div>
  );
}

export default Menupage_chicken2;
