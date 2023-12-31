import { useContext, useState } from "react";
import { UserDispatchContext } from "./../App";
import OurButton from "./OurButton";

export let nameValue = ''; // 값을 내보내기 위한 변수 선언
export let accountValue = ''; // 값을 내보내기 위한 변수 선언

function UserInfo() {
  const [account, setAccount] = useState("");
  const [name, setName] = useState("");

  const { onCreate } = useContext(UserDispatchContext);

  const changeAccount = (e) => {
    setAccount(e.target.value);
    accountValue = e.target.value; // 값을 변수에 할당
  };

  const changeName = (e) => {
    setName(e.target.value);
    nameValue = e.target.value; // 값을 변수에 할당
  };


  const addUser = () => {
    if (account.length >= 1 && name.length >= 1) {
      onCreate(account, name);
      setAccount("");
      setName("");
    }
  };

  return (
    <div className="UserInfo">
      <h3 className="guest">게스트 회원 정보를 입력해줘</h3>
      <input
        className="username"
        placeholder="닉네임"
        onChange={changeName}
        value={name}
      />
      <input
        className="useraccount"
        placeholder="환불계좌"
        onChange={changeAccount}
        value={account}
      />
      <OurButton text={"추가하기"} onClick={addUser} />
    </div>
  );
}

export default UserInfo;
