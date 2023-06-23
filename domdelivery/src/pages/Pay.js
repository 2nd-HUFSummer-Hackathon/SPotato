import OurButton from "../component/OurButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pay(props) {
  const navigate = useNavigate();
  let totalvalue = props.cost + 3000;

  const number = props.selectedMenuId;
  let choice1, choice2, choice3;
  const userchoice = props.menu_name;
  console.log(userchoice);
  if (number == 0 || number == 1) {
    choice1 = "포테이토피자+콜라"
    choice2 = "치즈피자+콜라"
    choice3 = "치즈피자+콜라"
  } else if (number == 2) {
    choice1 = "까르보치킨 치즈링"
    choice2 = "나이스투 미트 유 피자"
    choice3 = "나이스투 미트 유 피자"
  } else if (number == 3) {
    choice1 = "대구연탄불고기"
    choice2 = "어니언메가포테이토"
    choice3 = "대구연탄불고기"
  } else if (number == 4 || number == 5) {
    choice1 = "순살 두마리파닭"
    choice2 = "순살한마리 반/반"
    choice3 = "순살한마리 반/반"
  } else if (number == 6) {
    choice1 = "레드오리지날"
    choice2 = "허니오리지날"
    choice3 = "허니오리지날"
  } else if (number == 7) {
    choice1 = "더블팝순살 후라이드"
    choice2 = "더블팝순살 후라이드"
    choice3 = "뿌링클 콤보"
  } else if (number == 8 || number == 9) {
    choice1 = "마라로드 비프세트"
    choice2 = "더블 치킨버거 세트"
    choice3 = "마라로드 비프세트"
  } else if (number == 10) {
    choice1 = "싸이버거 세트"
    choice2 = "싸이버거 세트"
    choice3 = "딥치즈버거 세트"
  } else if (number == 11) {
    choice1 = "텍사스레드"
    choice2 = "텍사스레드"
    choice3 = "더머쉬룸"
  }
  return (
    <div className="Pay">
      <div className="Pay-header">
        <div className="fakeaccount"> 가상계좌: 우리 1002-061-238724</div>
        <div className="price">{totalvalue} 원</div>
      </div>

      <hr></hr>

      <div className="waiting">
        다른 학우들이 당신의 결제를 기다립니다...(3/4)
      </div>

      <div className="Pay-main" style={{marginBottom: "0px"}}>
        <div className="num">1</div>
        <div
          className="menu"
          style={{
            borderWidth: 2,
            borderColor: "green",
            borderStyle: "solid",
            padding: "20px",
            marginLeft: "30px",
            width: "300px",
          }}
        >
          {props.menu_name}
        </div>
        <div style={{ padding: "20px", marginLeft: "10px", width: "20px" }}>
          <OurButton text={"결제"} onClick={() => navigate("/delivery")} />
        </div>
      </div>

      <div className="Pay-main">
        <div className="num">2</div>
        <div
          className="menu"
          style={{
            borderWidth: 2,
            borderColor: "green",
            borderStyle: "solid",
            padding: "20px",
            marginLeft: "30px",
            width: "300px",
          }}
        >
          {choice1}
        </div>
        <div
          style={{
            padding: "20px",
            marginLeft: "30px",
            marginRight: "-35px",
            width: "40px",
            backgroundColor: "#64c964",
            color: "white",
          }}
        >
          완료
        </div>
      </div>

      <div className="Pay-main">
        <div className="num">3</div>
        <div
          className="menu"
          style={{
            borderWidth: 2,
            borderColor: "green",
            borderStyle: "solid",
            padding: "20px",
            marginLeft: "30px",
            width: "300px",
          }}
        >
          {choice2}
        </div>
        <div
          style={{
            padding: "20px",
            marginLeft: "30px",
            marginRight: "-35px",
            width: "40px",
            backgroundColor: "#64c964",
            color: "white",
          }}
        >
          완료
        </div>
      </div>

      <div className="Pay-main">
        <div className="num">4</div>
        <div
          className="menu"
          style={{
            borderWidth: 2,
            borderColor: "green",
            borderStyle: "solid",
            padding: "20px",
            marginLeft: "30px",
            width: "300px",
          }}
        >
          {choice3}
        </div>
        <div
          style={{
            padding: "20px",
            marginLeft: "30px",
            marginRight: "-35px",
            width: "40px",
            backgroundColor: "#64c964",
            color: "white",
          }}
        >
          완료
        </div>
      </div>
    </div>
  );
}

export default Pay;
