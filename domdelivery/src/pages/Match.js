function Match() {
  return (
    <div className="Match" style={{display: "inline-block", verticleAlign: "middle"}}>
      <div style={{display: "flex", backgroundColor: "grey", alignItems: "flex-start"}}>
       <div style={{marginLeft: 20, marginTop: 20, width: 450}}>
         <h2>___ 방</h2>
       </div>
       <div style={{marginLeft: 20, backgroundColor: "grey" ,marginTop: 20, width: 450}}>
         <h1 style={{fontSize: 25}}>메뉴선택</h1>
       </div>
      </div>
      <div style={{marginLeft: 20, backgroundColor: "grey", marginTop: 20, width: 450}}>
        <h3 style={{fontSize: 20}}>현재 모인 돈 / 최소 주문 금액</h3>
      </div>
    </div>
  );
}

export default Match;
