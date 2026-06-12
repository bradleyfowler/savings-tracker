const MetricCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{value}</p>
    </div>
  );
};

export default MetricCard;
