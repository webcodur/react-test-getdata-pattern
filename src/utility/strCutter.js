const strCutter = (str, len) => {
  if (str.length >= len) {
    return str.substr(0, len) + "...";
  } else return str;
};

export default strCutter;
