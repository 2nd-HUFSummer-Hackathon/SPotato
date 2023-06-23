import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {useState} from "react";
import OurButton from "../component/OurButton";
import UserInfo from "../component/UserInfo";

const foodOptionList =[
  {value:"pizza", name:"피자"},
  {value:"chicken", name:"치킨"},
  {value:"hamburger",name:"햄버거"}
]

const ControlMenu = ({value, onChange, optionList}) => {
  return (
      <select 
          className="ControlMenu"
          value={value} 
          onChange={(e)=>onChange(e.target.value)}
      >
          {optionList.map((it, idx)=> (
              <option key = {idx} value={it.value}>
                  {it.name}
              </option>
          ))}
      </select>
  );
};

function Home() {
  const navigate = useNavigate();
  const [foodType, setFoodType] = useState('pizza')

  return (
    <div className="Home">
      <h3>오류 안뜬당 히히</h3>
      <h4>여기는 home</h4>
      <UserInfo />
      <div>
        <ControlMenu
          value={foodType}
          onChange={setFoodType}
          optionList={foodOptionList}
        />
      
      </div>
      <OurButton text={"밥 먹으러 가자!"} onclick={() => navigate("/match")} />
      <h5>
      <OurButton text={"goto pay"} onclick={() => navigate("/pay")} />
      <OurButton text={"goto delivery"} onclick={() => navigate("/delivery")} />
      <OurButton text={"goto menuselect"} onclick={() => navigate("/menuselect")} />
      </h5>
    </div>
  );
}

export default Home;
