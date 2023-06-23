import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";

function Match(props) {
  const number = props.selectedMenuId;
  let RoomName = "미선택";
  if (number == 0 || number == 1) {
    RoomName = "피자보이";
  } else if (number == 2) {
    RoomName = "반올림피자";
  } else if (number == 3) {
    RoomName = "베이식스";
  } else if (number == 4 || number == 5) {
    RoomName = "미파닭";
  } else if (number == 6) {
    RoomName = "교촌치킨";
  } else if (number == 7) {
    RoomName = "BHC";
  } else if (number == 8 || number == 9) {
    RoomName = "롯데리아";
  } else if (number == 10) {
    RoomName = "맘스터치";
  } else if (number == 11) {
    RoomName = "666버거";
  } else if (number == 12) {
    RoomName = "피자보이";
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
          <div className="Money">현재 모인 돈 / 최소 주문 금액</div>
          <div style={{ marginLeft: "40px", width: "100px" }}>
            <OurButton text={"주문 하기"} onClick={() => navigate("/pay")} />
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="Match-main">
        <div className="num">1</div>
        <div className="menu">메뉴</div>
        <div style={{ padding: "20px", marginLeft: "10px", width: "20px" }}>
          <OurButton type="positive" text={"O"} />
        </div>
      </div>
    </div>
  );
}

export default Match;
