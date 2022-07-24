import { useState } from "react";

export default function ListCard(props) {
  const [like, setLike] = useState(0);
  const handleLike = () => {
    setLike(like + 1);
  };
  const listCard = props.listcard.map((card, index) => {
    return (
      <div className="card-container" key={index}>
        <div className="img-container">
          <img className="img" src={card.img} alt="img" />
        </div>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
        <div className="d-flex justify-content-center">
          <div className="px-3" onClick={handleLike} key={index}>
            <i class="fa fa-heart" aria-hidden="true"></i>
          </div>
          <span>{like}</span>
        </div>
      </div>
    );
  });

  return <div className="d-flex justify-content-between">{listCard}</div>;
}
