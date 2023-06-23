import { useNavigate } from "react-router-dom";
function Menupage_ham3(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(9500);
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(9300);
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~666버거~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/ham3-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/ham3-2.jpg`}
      />
    </div>
  );
}

export default Menupage_ham3;
