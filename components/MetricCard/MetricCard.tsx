const MetricCard = ({ title, value }: { title: string; value: number | string }) => {
  return (
    <div className="rounded-2xl bg-linear-to-r from-[#b92b09] to-[#ff5722] mb-4">
      <div className="p-4">
        <h1 className="text-preset-5-semi-bold mb-8">{title}</h1>
        <p className="text-preset-1-mobile">{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;
