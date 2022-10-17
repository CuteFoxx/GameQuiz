import React, { useState } from "react";
import getRandomNumber from "../../utils/getRandomNumber";
import "./GameQuiz.css";
import Score from "../../components/score/Score";
import GameQuizForm from "../../components/gameQuizForm/GameQuizForm";
import HitPoints from "../../components/hp/HitPoints";
import DeathScreen from "../DeathScreen/DeathScreen";

const GameQuiz = ({ data }) => {
  const [score, setScore] = useState(0);
  const [hp, setHp] = useState(3);
  const [currentGame, setCurrentGame] = useState(
    data.results[getRandomNumber(0, data.results.length - 1)]
  );

  return hp <= 0 ? (
    <DeathScreen score={score} />
  ) : (
    <div className="game-quiz">
      <HitPoints hp={hp} />
      <Score score={score} />
      <section className="game-quiz__card">
        <img
          src={currentGame.background_image}
          alt={currentGame.slug}
          className="game-quiz__img"
        />
        <GameQuizForm
          data={data}
          setScore={setScore}
          currentGame={currentGame}
          setCurrentGame={setCurrentGame}
          setHp={setHp}
        />
      </section>
    </div>
  );
};

export default GameQuiz;
