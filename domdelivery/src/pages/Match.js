import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";

function Match(props) {
  const number = props.selectedMenuId;
  let min_money = 0;
  let RoomName = "미선택";
  if (number == 0 || number == 1) {
    RoomName = "피자보이";
    min_money = 34000;
  } else if (number == 2) {
    RoomName = "반올림피자";
    min_money = 32000;
  } else if (number == 3) {
    RoomName = "베이식스";
    min_money = 37000;
  } else if (number == 4 || number == 5) {
    RoomName = "미파닭";
    min_money = 20000;
  } else if (number == 6) {
    RoomName = "교촌치킨";
    min_money = 27000;
  } else if (number == 7) {
    RoomName = "BHC";
    min_money = 25000;
  } else if (number == 8 || number == 9) {
    RoomName = "롯데리아";
    min_money = 13000;
  } else if (number == 10) {
    RoomName = "맘스터치";
    min_money = 11000;
  } else if (number == 11) {
    RoomName = "666버거";
    min_money = 12500;
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
          <div className="Money">현재 모인 돈 / {min_money}</div>
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

      <div className="Match-main">
        <div className="num">2</div>
        <div className="menu">메뉴</div>
        <div style={{ padding: "20px", marginLeft: "10px", width: "20px"}}>
          <OurButton type="positive" text={"O"} />
        </div>
      </div>

      <div className="Match-main">
        <div className="num">3</div>
        <div className="menu">메뉴</div>
        <div style={{ padding: "20px", marginLeft: "10px", width: "20px" }}>
          <OurButton type="positive" text={"O"} />
        </div>
      </div>

      <div className="Match-main">
        <div className="num">4</div>
        <div className="menu">메뉴</div>
        <div style={{ padding: "20px", marginLeft: "10px", width: "20px" }}>
          <OurButton type="positive" text={"O"} />
        </div>
      </div>
    </div>
  );
}

export default Match;
