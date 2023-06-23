import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {useState} from "react";
import OurButton from "../component/OurButton";
import UserInfo from "../component/UserInfo";

const foodOptionList =[
  
  {value:"pizza", name:"피자"},
  {value:"chicken", name:"치킨"},
  {value:"hamburger",name:"햄버거"}
]

const pizzaList=[
  {value:"notCare", name:"상관없음"},
  {value:"boy", name:"피자보이"},
  {value:"banolim", name:"반올림피자"},
  {value:"bs",name:"베이식스"}
]


const chickenList=[
  {value:"notCare", name:"상관없음"},
  {value:"crazy", name:"미파닭"},
  {value:"kyochon", name:"교촌"},
  {value:"bhc",name:"BHC"}
]

const hamburgerList=[
  {value:"notCare", name:"상관없음"},
  {value:"lotte", name:"롯데리아"},
  {value:"moms", name:"맘스터치"},
  {value:"six",name:"666버거"}
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
  const [foodType, setFoodType] = useState('pizza');
  const [subType, setSubtype] = useState('notCare')

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
        <ControlMenu
          value = {subType}
          onChange = {setSubtype}
          optionList={foodType=="pizza"? pizzaList : (foodType=="hamburger"? hamburgerList : chickenList)}
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
