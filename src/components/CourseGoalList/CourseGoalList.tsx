import { type ReactNode } from "react";

import { useGoalProps as Goals } from "../../App";
import CourseGoal from "../CurseGoal/CourseGoal";
import { InfoBox } from "../InfoBox/InfoBox";

type CourseGoaListProps = {
  goals: Goals[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoaListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        <p>you don't have goals yet. Try to add some goals!</p>
      </InfoBox>
    );
  }
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        <p>you're adding too many goals. take it easy...</p>
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
