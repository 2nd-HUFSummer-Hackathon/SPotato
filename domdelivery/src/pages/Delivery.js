import {useState, useEffect} from "react";

const Delivery=()=> {

  const ImageChanger = () => {
    const [currentImage, setCurrentImage] = useState(process.env.PUBLIC_URL+`assets/line1.png`);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentImage(process.env.PUBLIC_URL+`assets/line2.png`);
      }, 5000); // 5초 후에 이미지 변경
  
      return () => {
        clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 제거
      };
    }, []); // 컴포넌트가 처음 렌더링될 때만 실행

    const text = currentImage===process.env.PUBLIC_URL+`assets/line2.png` 
      ? "주문하신 음식이 20분 내로 도착 예정입니다. 교내 배달존으로 모여주세요!" 
      : "음식이 조리 중입니다. 조금만 기다려 주세요... ."
  
    return (
      <div>
        <img className="imgline" src={currentImage} alt="Current Image" />
        <div className="delivery-text">
          {text}
        </div>
      </div>
    );
  };

  return (
    <div className="Delivery">
      <img className="bike" src={process.env.PUBLIC_URL+`assets/bike.png`}/>
      <div ><ImageChanger/></div>
      
    </div>
  )
}

export default Delivery;

