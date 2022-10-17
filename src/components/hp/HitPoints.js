import "./HitPoints.css";

const HitPoints = ({ hp }) => {
  const hearts = [];

  for (let i = hp; i > 0; i--) {
    hearts.push(
      <img className="heart" key={i} src="./heart.png" alt="heart" />
    );
  }

  return <div className="hearts-container">{hearts}</div>;
};

export default HitPoints;
