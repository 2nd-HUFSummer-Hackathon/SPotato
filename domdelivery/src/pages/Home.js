import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate;
  return (
    <div className="Home">
      <h4>여기는 home</h4>
    </div>
  );
}

export default Home;
