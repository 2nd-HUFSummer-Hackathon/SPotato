import { useNavigate } from "react-router-dom";
function Menupage_ham2(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(8800);
    props.setName("싸이버거 세트");
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(7600);
    props.setName("딥치즈버거 세트");
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~맘스터치~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/ham1-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/ham1-2.jpg`}
      />
    </div>
  );
}

export default Menupage_ham2;
