import { useNavigate } from "react-router-dom";
function Menupage_pizza3(props) {
  const navigate = useNavigate();
  function handleClickOne() {
    alert("첫번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(21900);
    props.setName("어니언메가포테이토");
  }
  function handleClickTwo() {
    alert("두번째 이미지가 선택되었습니다.");
    navigate(-1);
    props.setCost(18900);
    props.setName("대구연탄불고기");
  }
  return (
    <div className="MenuSelect">
      <h3>여기는 ~베이식스피자~입니다</h3>
      <hr></hr>
      <img
        onClick={handleClickOne}
        src={process.env.PUBLIC_URL + `assets/pizza3-1.jpg`}
      />
      <img
        onClick={handleClickTwo}
        src={process.env.PUBLIC_URL + `assets/pizza3-2.jpg`}
      />
    </div>
  );
}

export default Menupage_pizza3;
