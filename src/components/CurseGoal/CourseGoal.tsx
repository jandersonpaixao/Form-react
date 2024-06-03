import { FC } from "react";
import { CourseGoalProps } from "./CourseGoal.type";


const CourseGoal: FC<CourseGoalProps> = ({ title, children, id, onDelete }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id) }>Delete</button>
    </article>
  );
};

export default CourseGoal;
