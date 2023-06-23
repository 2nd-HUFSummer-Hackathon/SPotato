import { useState } from "react";

function UserInfo() {
  const [text, setText] = useState("");
  const [code,setCode] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onChangeCode = (e)=>{
    setCode(e.target.value);
  };

  return (
    <div className="UserInfo">
      <h3 className="guest">게스트 회원 정보를 입력해줘</h3>
      <input placeholder='닉네임' onChange={onChange} value={text} />
      <input placeholder='환불계좌' onChange={onChangeCode} value={code} />
    </div>
  );
}

export default UserInfo;
