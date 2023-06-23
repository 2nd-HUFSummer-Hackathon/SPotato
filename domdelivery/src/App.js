import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useRef } from "react";

import Home from "./pages/Home";
import Match from "./pages/Match";
import MenuSelect from "./pages/MenuSelect";
import Pay from "./pages/Pay";
import Delivery from "./pages/Delivery";
import { useReducer, useRef } from "react";

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

const dummyData = [{}];
const dummyUser = [
  { id: 1, account: 123456789, name: "K" },
  { id: 2, account: 123456989, name: "J" },
  { id: 3, account: 123555789, name: "H" },
];
export const UserInformation = React.createContext();
export const UserDispatchContext = React.createContext();

function App() {
  const [user, dispatch] = useReducer(reducer, dummyUser);
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

  return (
    <UserInformation.Provider value={user}>
      <UserDispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/match" element={<Match />} />
              <Route path="/menuselect/:id" element={<MenuSelect />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/delivery" element={<Delivery />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserDispatchContext.Provider>
    </UserInformation.Provider>
  );
}

export default App;
