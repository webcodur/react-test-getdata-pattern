import { useState, useEffect } from "react";
import innerCompStyle from "../style/innerCompStyle.js";
const InnerComp = ({ idx }) => {
  const [innerData, setInnerData] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleButtn = () => {
    setIsOpen((prev) => !prev);
    setIsLoading(true);
  };

  useEffect(() => {
    if (isOpen) {
      getInnerData();
    }
  }, [isOpen]);

  const getInnerData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${idx + 1}`)
      .then((response) => response.json())
      .then((response) => {
        setInnerData(response);
      })
      .then(setIsLoading(false));
  };

  return (
    <div style={innerCompStyle}>
      <div>
        <button onClick={toggleButtn}>{isOpen ? "닫기" : "보기"}</button>
      </div>
      작성자 : &nbsp;
      {isOpen && !isLoading && innerData?.name}
    </div>
  );
};

export default InnerComp;
