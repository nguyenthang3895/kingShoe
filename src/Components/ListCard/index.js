export default function ListCard(props) {
  const listCard = props.listcard.map((card, index) => {
    return (
      <div className="card-container" key={index}>
        <div className="img-container">
          <img className="img" src={card.img} alt="img" />
        </div>
        <div className="card-title">{card.title}</div>
        <div className="card-description">{card.description}</div>
      </div>
    );
  });

  return <div className="d-flex justify-content-between">{listCard}</div>;
}
