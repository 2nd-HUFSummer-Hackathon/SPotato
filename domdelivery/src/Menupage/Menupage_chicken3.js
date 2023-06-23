import { useNavigate } from "react-router-dom";
function Menupage_chicken3(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(22000);
    props.setName("더블팝순살 후라이드");
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(20000);
    props.setName("뿌링클 콤보");
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~BHC~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/chicken3-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/chicken3-2.jpg`}
      />
    </div>
  );
}

export default Menupage_chicken3;
