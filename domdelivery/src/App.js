import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useReducer, useRef } from "react";

import Home from "./pages/Home";
import Match from "./pages/Match";
import MenuSelect from "./pages/MenuSelect";
import Pay from "./pages/Pay";
import Delivery from "./pages/Delivery";

const reducer = (state, action) => {
  let newState = [...state];
  switch (action.type) {
    case "CREATE": {
      const newUser = {
        ...action.data,
      };
      newState = [newUser, ...state];
      break;
    }
    default:
      return state;
  }
  return newState;
};

const dummyChicken = [
  { id: 15, max: 2, order: [1, 0], current: 10500, least: 20000 },
];

const dummyPizza = [
  { id: 13, max: 4, order: [0, 0, 0, 0], current: 8760, least: 30000 },
];

const dummyHamburger = [
  { id: 110, max: 3, order: [1, 0, 0], current: 29000, least: 40000 },
];

const dummyUser = [
  { id: 1, account: 123456789, name: "K" },
  { id: 2, account: 123456989, name: "J" },
  { id: 3, account: 123555789, name: "H" },
];
export const UserInformation = React.createContext();
export const UserDispatchContext = React.createContext();

function App() {
  const [user, dispatch] = useReducer(reducer, dummyUser);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [cost, setCost] = useState(0);
  const [menu_name, setName] = useState("");
  const dataId = useRef(1);
  const onCreate = (account, name) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        account,
        name,
      },
    });
    dataId.current += 1;
  };
  const handleMenuIdChange = (menuId) => {
    setSelectedMenuId(menuId);
  };
  return (
    <UserInformation.Provider value={user}>
      <UserDispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route
                path="/"
                element={
                  <Home
                    onMenuIdChange={handleMenuIdChange}
                    selectedMenuId={selectedMenuId}
                  />
                }
              />
              <Route
                path="/match"
                element={<Match selectedMenuId={selectedMenuId} cost={cost} menu_name={menu_name}/>}
              />
              <Route
                path="/menuselect"
                element={
                  <MenuSelect
                    selectedMenuId={selectedMenuId}
                    setCost={setCost}
                    setName={setName}
                  />
                }
              />
              <Route path="/pay" element={<Pay selectedMenuId={selectedMenuId} cost={cost} menu_name={menu_name} />} />
              <Route path="/delivery" element={<Delivery />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserDispatchContext.Provider>
    </UserInformation.Provider>
  );
}

export default App;
