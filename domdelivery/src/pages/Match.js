import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";


function Match() {
  const navigate = useNavigate();
  return (
    <div className="Match">
      <div style={{display: "flex", alignItems: "flex-start"}}>
       <div style={{marginTop: 20, width: 450}}>
         <h2>___ 방</h2>
       </div>
       <div style={{marginLeft: 20, marginTop: 50}}>
        <OurButton text={"메뉴 선택"} onclick={() => navigate("/menuselect")} />
       </div> 
      </div>
      
      <div style={{marginLeft: 20, marginTop: 20}}>
        <h3 style={{fontSize: 20}}>현재 모인 돈 / 최소 주문 금액</h3>
      </div>

    </div>
  );
}

export default Match;
