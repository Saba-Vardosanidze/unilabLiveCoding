import Start from "./components/start/Start";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Quiz from "./components/start/quiz/quiz";
import Header from "./components/header/Header";
import End from "./components/end/end";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/end" element={<End />} />
      </Routes>
    </div>
  );
};

export default App;
