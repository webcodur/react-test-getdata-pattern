const takeOnly3 = (data) => {
  const TARGET_lENGTH = 3;
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    if (i < TARGET_lENGTH) arr.push(data[i]);
    else return arr;
  }
};
export default takeOnly3;
