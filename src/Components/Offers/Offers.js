import "./Offers.css";

export const Offers = () => {
  const offers = [
    { user: "@denise", offer: 320000 },
    { user: "@stacia", offer: 360000 },
    { user: "@kipling", offer: 450000 },
    { user: "@evaline", offer: 420000 },
    { user: "@frankie", offer: 390000 },
    { user: "@mindy", offer: 260000 },
    { user: "@kimmy", offer: 400000 },
    { user: "@cybill", offer: 480000 },
    { user: "@john", offer: 500000 },
  ].sort((first, second) => second.offer - first.offer);
  return (
    <div className="Offers">
      <h5>Top 10 Highest Offers</h5>
      {offers.map((offer) => (
        <div key={offer.user} className="Offer">
          {offer.user} <span>$ {offer.offer}</span>
        </div>
      ))}
    </div>
  );
};
