import InnerComp from "./InnerComp";
import outerDivStyle from "../style/outerDivStyle";
import strCutter from "../utility/strCutter";

const OuterComp = ({ outerData, outerIdx }) => {
  return (
    <li style={outerDivStyle}>
      <div>
        <div>title : {strCutter(outerData.title, 35)}</div>
        <InnerComp outerIdx={outerIdx} />
      </div>
    </li>
  );
};

export default OuterComp;
