function Pay() {
  return (
    <div className="Pay">
      <div className="Pay-header">
        <div style={{color:"white", backgroundColor:"blue", padding:"20px",marginLeft:"100px",marginRight:"100px",marginBottom:"10px"}}>가상계좌: ~~~</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", marginLeft:"120px",marginRight:"120px"}}>N 원</div>
      </div>

      <div className="Pay-main">
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px", width:"20px"}}>1</div>
        <div style={{borderWidth: 2, borderColor:'green', borderStyle:"solid", padding:"20px",  marginLeft:"50px", width:"300px"}}>메뉴</div>
      </div> 
    </div>
  );
}

export default Pay;
