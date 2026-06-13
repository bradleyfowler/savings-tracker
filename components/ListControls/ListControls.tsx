import Button from "@/components/Button/Button";

const ListControls = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button type="filter">Filters</Button>
      <Button type="filter">Sort by</Button>
    </div>
  );
};

export default ListControls;