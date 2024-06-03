import { FormEvent } from "react";

const NewGoal = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    new FormData(event.currentTarget);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">your goal</label>
        <input id="goal" type="text" name="goal" />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
};

export default NewGoal;
