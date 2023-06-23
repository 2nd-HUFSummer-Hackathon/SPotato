import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import OurButton from "../component/OurButton";
import UserInfo from "../component/UserInfo";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="Home">
      <h3>오류 안뜬당 히히</h3>
      <h4>여기는 home</h4>
      <UserInfo />
      <OurButton text={"밥 먹으러 가자!"} onclick={() => navigate("/match")} />
    </div>
  );
}

export default Home;
