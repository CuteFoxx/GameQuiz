import useFetch from "./hooks/useFetch";
import "./App.css";
import GameQuiz from "./pages/GameQuiz/GameQuiz";
import getRandomNumber from "./utils/getRandomNumber";
import { useEffect, useRef } from "react";
import Loading from "./pages/Loading/Loading";
import Error from "./pages/Error/Error";

const App = () => {
  const randomNumber = useRef(1);

  useEffect(() => {
    randomNumber.current = getRandomNumber(1, 25);
  }, []);

  const { data, error, isLoading } = useFetch(
    `https://api.rawg.io/api/games?page_size=40&page=${randomNumber.current}&key=e15cd31dab974e419070f2b21cbbd977`
  );

  return isLoading ? (
    <Loading />
  ) : error ? (
    <Error error={error.message} />
  ) : (
    <div className="app">
      <div className="app__container">
        <GameQuiz data={data} />
      </div>
    </div>
  );
};

export default App;
