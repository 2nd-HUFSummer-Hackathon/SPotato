import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate;
  return (
    <div className="Home">
      <h3>오류 안뜬당 히히</h3>
      <h4>여기는 home</h4>
    </div>
  );
}

export default Home;
