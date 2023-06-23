import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";

function Match() {
  const navigate = useNavigate();
  return (
    <div className="Match">
      <div className="Match-header">
        <div className="RoomInfo">
          <div className="RoomName">0000 방</div>
          <div style={{  marginLeft:"40px", width:"100px"}}>
            <OurButton text={"메뉴 선택"} onClick={() => navigate("/menuselect")} />
          </div> 
        </div>

        <div className="Money-Wrapper">
          <div className="Money">현재 모인 돈 / 최소 주문 금액</div>
        </div>
      </div>

      <div className="Match-main">
        <div className="num">1</div>
        <div className="menu">메뉴</div>
        <div style={{padding:"20px", marginLeft: "10px", width:"20px"}}>
          <OurButton type='positive' text={"O"} />
        </div>
      </div> 


    </div>
  );
}

export default Match;
