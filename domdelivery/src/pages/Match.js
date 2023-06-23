import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";


function Match() {
  const navigate = useNavigate();
  return (
    <div className="Match">
      <div className="Match-header">
        <div style={{display: "flex", alignItems: "flex-start", marginTop:"20px"}}>
          <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", width:"500px"}}>0000 방</div>
          <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft:"50px", width:"100px"}}>
            <OurButton text={"메뉴 선택"} onclick={() => navigate("/menuselect")} />
          </div> 
        </div>

        <div style={{display: "flex", alignItems: "flex-start", marginTop:"20px"}}>
          <div style={{color:"white", backgroundColor:"blue", padding:"20px",width:"500px"}}>현재 모인 돈 / 최소 주문 금액</div>
          <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft:"50px", width:"100px"}}>aa</div>
        </div>
      </div>

      <div className="Match-main">
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft: "-20px", width:"20px"}}>1</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px",  marginLeft:"30px", width:"400px"}}>메뉴</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft: "24px", width:"20px"}}>
          <OurButton text={"O"}/>
        </div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft: "10px", width:"20px"}}>
          <OurButton text={"X"}/>
        </div>
      </div> 


    </div>
  );
}

export default Match;
