const GoalCard = ({
  amount,
  dueDate,
  progress,
  title,
}: {
  amount: string;
  dueDate: string;
  progress: number;
  title: string;
}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{progress}%</p>
      <progress value={progress} max="100"></progress>
      <p>{amount}</p>
      <p>Due {dueDate}</p>
    </div>
  );
};

export default GoalCard;
