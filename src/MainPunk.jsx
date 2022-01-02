import React, { useEffect, useState } from "react";
import "./MainPunk.css";
import weth from "./assets/weth.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function MainPunk({ punkList, selectedPunk }) {
  const [activePunk, setActivePunk] = useState(punkList[selectedPunk]);
  console.log(punkList, activePunk + "active", selectedPunk + "selected");
  useEffect(() => {
    setActivePunk(punkList[selectedPunk]);
  }, [punkList, selectedPunk]);

  return (
    <>
      <div className="mainPunk">
        <img src={activePunk?.image_original_url} alt="" />
        <div className="punk__information">
          <div className="punk__details">
            <p>
              {activePunk?.name} #{activePunk?.token_id}
            </p>
            <p>{activePunk?.traits[0].value}</p>
          </div>
          <div className="punk__priceContainer">
            <img src={weth} alt="" />
            <div className="price">{activePunk?.traits[0]?.value}</div>
            <div className="action__buttons">
              <button className="greenButton">Buy</button>
              <button className="redButton">Sell</button>
            </div>
          </div>

          <div className="owner__info">
            <img src={activePunk?.owner.profile_img_url} alt="" />
            <div className="owner__adress">
              <p>{activePunk?.owner.address}</p>
              <p>
                {" "}
                <a href="#">@{activePunk?.creator?.user?.username}</a>{" "}
              </p>
            </div>

            <div className="socialMedia">
              <InstagramIcon />
              <TwitterIcon />
              <LinkedInIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPunk;
