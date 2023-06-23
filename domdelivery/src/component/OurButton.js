import React, { useState } from 'react';

const OurButton = ({ text, type, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    if (onClick) {
      onClick(); // onClick prop이 존재할 경우 해당 함수를 호출합니다.
    }
  };

  return (
    <button
      className={`OurButton ${isClicked ? 'OurButton_clicked' : ''}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

OurButton.defaultProps = {
  type: 'default',
};

export default OurButton;


