const MetricCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="rounded-2xl bg-linear-to-r from-[#b92b09] to-[#ff5722] mb-4">
      <div className="p-4">
        <h1 className="text-base tracking-[0.3px] mb-8">{title}</h1>
        <p className="text-[44px] font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;
