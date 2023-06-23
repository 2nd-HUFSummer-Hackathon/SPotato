const OurButton = ({text,type,onClick})=>{
    
  const btnType = ['positive','negative'].includes(type)? type:'default';

  return (
      <button 
          className={["OurButton",`OurButton_${btnType}`].join(" ")} 
          onClick={onClick}
      >
          {text}
      </button>
  )
}

OurButton.defaultProps={
  type:"default",
};

export default OurButton;