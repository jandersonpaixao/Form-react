import Header from "./components/Header/Header";
import goalsImg from "../src/assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList/CourseGoalList";
import NewGoal from "./components/NewGoal/NewGoal";

export type useGoalProps = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [useGoal, setGoal] = useState<useGoalProps[]>([]);

  const handleGoal = () => {
    setGoal((prevGoal) => {
      const newGoal: useGoalProps = {
        id: Math.random(),
        title: "Learn new things",
        description: "learn new things every day",
      };
      return [...prevGoal, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoal((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };

  return (
    <main className="App">
      <Header image={{ src: goalsImg, alt: "list of goals" }}>
        <p>list of goals</p>
      </Header>
      <NewGoal />
      <CourseGoalList goals={useGoal} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
