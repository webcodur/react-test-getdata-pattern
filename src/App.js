import { useState, useEffect } from "react";
import OuterComp from "./components/OuterComp";
import takeOnly3 from "./utility/takeOnly3";
function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOuterData();
  }, []);

  const getOuterData = async () => {
    await fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setData(takeOnly3(data)))
      .then(() => {
        setIsLoading(false);
      });
  };

  return <>{!isLoading && <OuterComp data={data} />}</>;
}

export default App;
