import {useState, useEffect} from "react";

function Delivery() {

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
  
    return (
      <div>
        <img src={currentImage} alt="Current Image" />
      </div>
    );
  };

  return (
    <div>
      <img src={process.env.PUBLIC_URL+`assets/bike.png`}/>
      <div><ImageChanger /></div>
      <div>
        주문하신 음식이 n분 후에 도착 예정입니다.<br/> 
        교내 배달존으로 모여주세요.
      </div>
    </div>
  )
}

export default Delivery;

