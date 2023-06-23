import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";

function Match(props) {
  const number = props.selectedMenuId;
  let min_money = 0;
  let RoomName = "미선택";
  let choice1, choice2, choice3;
  let monney = 0;
  if (number == 0 || number == 1) {
    RoomName = "피자보이";
<<<<<<< HEAD
    min_money = 17000;
  } else if (number == 2) {
    RoomName = "반올림피자";
    min_money = 16000;
  } else if (number == 3) {
    RoomName = "베이식스";
    min_money = 15000;
  } else if (number == 4 || number == 5) {
    RoomName = "미파닭";
    min_money = 12000;
  } else if (number == 6) {
    RoomName = "교촌치킨";
    min_money = 15000;
  } else if (number == 7) {
    RoomName = "BHC";
    min_money = 12000;
=======
    min_money = 34000;
    choice1 = "포테이토피자+콜라"
    choice2 = "치즈피자+콜라"
    choice3 = "치즈피자+콜라"
    monney = 34000;
  } else if (number == 2) {
    RoomName = "반올림피자";
    min_money = 32000;
    choice1 = "까르보치킨 치즈링"
    choice2 = "나이스투 미트 유 피자"
    choice3 = "나이스투 미트 유 피자"
    monney = 52500;
  } else if (number == 3) {
    RoomName = "베이식스";
    min_money = 37000;
    choice1 = "대구연탄불고기"
    choice2 = "어니언메가포테이토"
    choice3 = "대구연탄불고기"
    monney = 65700;
  } else if (number == 4 || number == 5) {
    RoomName = "미파닭";
    min_money = 20000;
    choice1 = "순살 두마리파닭"
    choice2 = "순살한마리 반/반"
    choice3 = "순살한마리 반/반"
    monney = 59700;
  } else if (number == 6) {
    RoomName = "교촌치킨";
    min_money = 27000;
    choice1 = "레드오리지날"
    choice2 = "허니오리지날"
    choice3 = "허니오리지날"
    monney = 58000;
  } else if (number == 7) {
    RoomName = "BHC";
    min_money = 25000;
    choice1 = "더블팝순살 후라이드"
    choice2 = "더블팝순살 후라이드"
    choice3 = "뿌링클 콤보"
<<<<<<< HEAD
>>>>>>> 90ca231e760af3568dcaf086fc196c33a68da1af
=======
    monney = 64000;
>>>>>>> 1ea28ace275aaea284e9800ab8da79c0aef90ef5
  } else if (number == 8 || number == 9) {
    RoomName = "롯데리아";
    min_money = 23000;
    choice1 = "마라로드 비프세트"
    choice2 = "더블 치킨버거 세트"
    choice3 = "마라로드 비프세트"
    monney = 25200;
  } else if (number == 10) {
    RoomName = "맘스터치";
    min_money = 21000;
    choice1 = "싸이버거 세트"
    choice2 = "싸이버거 세트"
    choice3 = "딥치즈버거 세트"
    monney = 20900;
  } else if (number == 11) {
    RoomName = "666버거";
    min_money = 32500;
    choice1 = "텍사스레드"
    choice2 = "텍사스레드"
    choice3 = "더머쉬룸"
    monney = 28100;
  }

  const navigate = useNavigate();
  console.log(RoomName);
  return (
    <div className="Match">
      <div className="Match-header">
        <div className="RoomInfo">
          <div className="RoomName">{RoomName} 방</div>
          <div style={{ marginLeft: "40px", width: "100px" }}>
            <OurButton
              text={"메뉴 선택"}
              onClick={() => navigate("/menuselect")}
            />
          </div>
        </div>

        <div className="Money-Wrapper">
          <div className="Money">
            {props.cost + monney} / {min_money}
          </div>
          <div style={{ marginLeft: "40px", width: "100px" }}>
            <OurButton text={"주문 하기"} onClick={() => navigate("/pay")} />
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="Match-main">
        <div className="num">1</div>
        <div className="menu">뿌링클</div>
        <div style={{ padding: "20px", marginLeft: "10px", width: "20px" }}>
          <OurButton type="positive" text={"O"} />
        </div>
      </div>

      <div className="Match-main" style={{ marginBottom: "10px" }}>
        <div className="num">2</div>
        <div className="menu">{choice1}</div>
        <div
          style={{
            padding: "20px",
            marginLeft: "30px",
            width: "80px",
            backgroundColor: "#64c964",
            color: "white",
          }}
        >
          o
        </div>
      </div>

      <div className="Match-main" style={{ marginBottom: "10px" }}>
        <div className="num">3</div>
        <div className="menu">{choice2}</div>
        <div
          style={{
            padding: "20px",
            marginLeft: "30px",
            width: "80px",
            backgroundColor: "#64c964",
            color: "white",
          }}
        >
          o
        </div>
      </div>

      <div className="Match-main" style={{ marginBottom: "10px" }}>
        <div className="num">4</div>
        <div className="menu">{choice3}</div>
        <div
          style={{
            padding: "20px",
            marginLeft: "30px",
            width: "80px",
            backgroundColor: "#64c964",
            color: "white",
          }}
        >
          o
        </div>
      </div>
    </div>
  );
}

export default Match;
