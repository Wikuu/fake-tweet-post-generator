import "./UserOffer.css";

export const UserOffer = (props) => {
  return (
    <div className="UserOffer">
      Your Offer is <span>$ {props.value}</span>
    </div>
  );
};
