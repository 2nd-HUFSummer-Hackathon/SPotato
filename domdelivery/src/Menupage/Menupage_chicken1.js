import { useNavigate } from "react-router-dom";
function Menupage_chicken1(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(22500);
    props.setName("순살 두마리파닭");
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(16000);
    props.setName("순살한마리 반/반");
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~미파닭~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/chicken1-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/chicken1-2.jpg`}
      />
    </div>
  );
}

export default Menupage_chicken1;
