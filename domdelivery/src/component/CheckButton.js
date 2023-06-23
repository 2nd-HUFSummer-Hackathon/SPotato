const CheckButton = ({
    type,
    text,
    onClick,
    isSelected
}) => {
    return (
        <button 
            onClick={()=>onClick(type)}
            className={[
                "CheckButton", 
                isSelected ? `CheckButton_on_${type}` :`CheckButton_off`,
            ].join(" ")}
        >{text}
        </button>
    );
};

export default CheckButton;