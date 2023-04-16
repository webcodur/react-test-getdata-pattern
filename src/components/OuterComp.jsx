import InnerComp from "./InnerComp";
import outerDivStyle from "../style/outerDivStyle";

const OuterComp = ({ data }) => {
  const postData = data;

  const strCutter = (str, len) => {
    if (str.length >= len) {
      return str.substr(0, len) + "...";
    } else return str;
  };

  return postData.map((ele, idx) => (
    <li key={"outer" + idx} style={outerDivStyle}>
      <div>
        <div>title : {strCutter(ele.title, 35)}</div>
        <InnerComp idx={idx} />
      </div>
    </li>
  ));
};

export default OuterComp;
