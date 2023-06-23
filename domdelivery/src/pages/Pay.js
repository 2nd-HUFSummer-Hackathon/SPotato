function Pay() {
  return (
    <div className="Pay">
      <div className="Pay-header">
        <div style={{color:"white", backgroundColor:"blue", padding:"20px",marginLeft:"200px",marginRight:"200px",marginBottom:"10px"}}>가상계좌: ~~~</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft:"220px",marginRight:"220px"}}>N 원</div>
      </div>

      <br></br>

      <div className="Pay-main">
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", width:"20px"}}>1</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px",  marginLeft:"50px", width:"500px"}}>메뉴</div>
      </div> 
    </div>
  );
}

export default Pay;
