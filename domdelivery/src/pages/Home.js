import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import OurButton from "../component/OurButton";
import UserInfo from "../component/UserInfo";
import MenuSelect from "./MenuSelect";
import Match from "./Match";

const foodOptionList = [
  { value: "pizza", name: "피자" },
  { value: "chicken", name: "치킨" },
  { value: "hamburger", name: "햄버거" },
];

const pizzaList = [
  { value: "notCare", name: "상관없음", menu_id: 0 },
  { value: "boy", name: "피자보이", menu_id: 1 },
  { value: "banolim", name: "반올림피자", menu_id: 2 },
  { value: "bs", name: "베이식스", menu_id: 3 },
];

const chickenList = [
  { value: "notCare", name: "상관없음", menu_id: 4 },
  { value: "crazy", name: "미파닭", menu_id: 5 },
  { value: "kyochon", name: "교촌", menu_id: 6 },
  { value: "bhc", name: "BHC", menu_id: 7 },
];

const hamburgerList = [
  { value: "notCare", name: "상관없음", menu_id: 8 },
  { value: "lotte", name: "롯데리아", menu_id: 9 },
  { value: "moms", name: "맘스터치", menu_id: 10 },
  { value: "six", name: "666버거", menu_id: 11 },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

function Home({ onMenuIdChange }) {
  const navigate = useNavigate();
  const [foodType, setFoodType] = useState("pizza");
  const [subType, setSubtype] = useState("notCare");
  const selectedMenu = useMemo(() => {
    const allMenus = [...pizzaList, ...chickenList, ...hamburgerList];
    return allMenus.find((menu) => menu.value === subType);
  }, [subType]);
  useEffect(() => {
    if (selectedMenu) {
      onMenuIdChange(selectedMenu.menu_id);
    }
  }, [selectedMenu, onMenuIdChange]);

  return (
    <div className="Home">
      <UserInfo />

      <h3>무엇을 함께 배달할까?</h3>

      <div className="select">
        <ControlMenu
          value={foodType}
          onChange={setFoodType}
          optionList={foodOptionList}
        />
        <ControlMenu
          value={subType}
          onChange={setSubtype}
          optionList={
            foodType === "pizza"
              ? pizzaList
              : foodType === "hamburger"
              ? hamburgerList
              : chickenList
          }
        />
      </div>
      <OurButton text={"밥 먹으러 가자!"} onClick={() => navigate("/match")} />
    </div>
  );
}

export default Home;
