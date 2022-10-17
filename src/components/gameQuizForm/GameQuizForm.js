import prettifyText from "../../utils/prettifyText";
import getRandomNumber from "../../utils/getRandomNumber";
import React, { useState } from "react";

const GameQuizForm = ({
  data,
  setScore,
  currentGame,
  setCurrentGame,
  setHp,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    if (prettifyText(userAnswear) === prettifyText(currentGame.slug)) {
      setScore((previousScore) => previousScore + 100);
    } else {
      setHp((previousHp) => previousHp - 1);
    }

    setCurrentGame(data.results[getRandomNumber(0, data.results.length - 1)]);
    setUserAnswear("");
  };

  const [userAnswear, setUserAnswear] = useState("");

  return (
    <form action="" className="game-quiz__form" onSubmit={handleSubmit}>
      <input
        value={userAnswear}
        onChange={(event) => setUserAnswear(event.target.value)}
        type="text"
        className="game-quiz__input"
        placeholder="Enter game name"
      />
    </form>
  );
};

export default GameQuizForm;
