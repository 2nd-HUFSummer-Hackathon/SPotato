import OurButton from "../component/OurButton";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Pay() {

  const navigate = useNavigate();



  return (
    <div className="Pay">
      <div className="Pay-header">
        <div className="fakeaccount"> 가상계좌: 우리 1002-061-238724</div>
        <div className='price' style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft:"120px",marginRight:"120px"}}>
          {`total`}+ palseInt({`eachPrice`}) 원
        </div>
      </div>

      <div>다른 학우들이 당신의 결제를 기다립니다...(2/3)</div>

      <div className="Pay-main">
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", width:"20px"}}>1</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px",  marginLeft:"30px", width:"300px"}}>{`menu`}</div>
        <div style={{padding:"20px", marginLeft: "10px", width:"20px"}}>
          <OurButton text={"O"}  onClick={() => navigate("/delivery")}/>
        </div>
      </div> 



    </div>
  );
}

export default Pay;
