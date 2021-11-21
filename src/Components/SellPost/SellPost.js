import "./SellPost.css";
import { UserOffer } from "../UserOffer/UserOffer";
import React, { useState } from "react";

export const SellPost = () => {
  const [offer, setOffer] = useState("0");

  //TODO When "downloadPost" button is clicked, if offer is highest user can download this picture

  return (
    <div className="SellPost">
      <h5>Want to buy this post ?</h5>
      <h4>
        The highest offer is $500000 made by <span>@john</span>
      </h4>
      <div className="PriceOffer">
        <input
          type="number"
          placeholder={"$ " + offer}
          onChange={(e) => setOffer(e.target.value)}
        />
        <input type="button" value="Offer" id="downloadPost" />
      </div>
      <UserOffer value={offer} />
    </div>
  );
};
