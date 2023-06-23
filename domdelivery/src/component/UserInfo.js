import { useState } from "react";

function UserInfo() {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="UserInfo">
      <h4>여기는 UserInfo</h4>
      <input onChange={onChange} value={text} />
    </div>
  );
}

export default UserInfo;
