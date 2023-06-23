import { useNavigate } from "react-router-dom";
function Menupage_ham1(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(6900);
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(7100);
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~롯데리아~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/ham2-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/ham2-2.jpg`}
      />
    </div>
  );
}

export default Menupage_ham1;
