import Button from "@/components/Button/Button";

const ListControls = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="secondary">
        <img src="/icon-filter.svg" alt="Filter" className="h-5 w-5" />
        Filters
      </Button>
      <Button variant="secondary">
        <img src="/icon-sort.svg" alt="Sort" className="h-5 w-5" />
        Sort by
      </Button>
    </div>
  );
};
export default ListControls;
