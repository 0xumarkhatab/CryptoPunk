import { useEffect, useState } from "react";
import "./App.css";
import CollectionCard from "./CollectionCard";
import CollectionCardList from "./CollectionCardList";
import Header from "./Header";
import axios from "axios";
import MainPunk from "./MainPunk";
function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const myNfts = async () => {
      const options = { method: "GET" };

      fetch(
        "https://testnets-api.opensea.io/assets?owner=0xDE0ADd18CBE81a9AF22236Bb82cD5a979c1aDf44&order_direction=asc&offset=0&limit=20",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response.assets);
          setPunkListData(response.assets);
        })

        .catch((err) => console.error(err));
    };
    return myNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      <MainPunk punkList={punkListData} selectedPunk={selectedPunk} />
      <CollectionCardList
        onClickHandler={setSelectedPunk}
        punkList={punkListData}
      />
    </div>
  );
}

export default App;
