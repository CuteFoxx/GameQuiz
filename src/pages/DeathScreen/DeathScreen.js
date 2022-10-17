import "./DeathScreen.css";

const DeathScreen = ({ score }) => {
  const bestScore = +localStorage.getItem("bestScore");

  if (score > bestScore) {
    localStorage.setItem("bestScore", score);
  }

  return (
    <section className="death-screen__container">
      <h1 className="death-screen__title">The end</h1>
      <p className="death-screen__score">{`Your score is ${score}`}</p>
      <p className="death-screen__best-score">{`Your best score is ${bestScore}`}</p>
      <button
        className="death-screen__play-again"
        onClick={() => window.location.reload()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fillRule="currentColor"
          className="bi bi-arrow-clockwise"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
          />
          <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
        </svg>
      </button>
    </section>
  );
};

export default DeathScreen;
