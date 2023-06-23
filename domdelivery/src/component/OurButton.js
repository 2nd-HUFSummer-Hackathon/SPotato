function OurButton({ text, onclick }) {
  return (
    <button className="OurButton" onClick={onclick}>
      {text}
    </button>
  );
}

export default OurButton;
