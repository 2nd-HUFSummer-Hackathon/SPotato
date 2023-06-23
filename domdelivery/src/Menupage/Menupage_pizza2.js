import { useNavigate } from "react-router-dom";
function Menupage_pizza2(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(21900);
    props.setName("나이스투 미트 유 피자");
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(21900);
    props.setName("까르보치킨 치즈링");
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~반올림피자~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/pizza2-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/pizza2-2.jpg`}
      />
    </div>
  );
}

export default Menupage_pizza2;
