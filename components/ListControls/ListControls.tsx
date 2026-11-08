import Image from "next/image";

import Button from "@/components/Button/Button";

const ListControls = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <Button variant="secondary">
        <Image
          src="/icon-filter.svg"
          height={20}
          width={20}
          alt="Filter"
        />
        Filters
      </Button>
      <Button variant="secondary">
        <Image
          src="/icon-sort.svg"
          height={20}
          width={20}
          alt="Sort"
        />
        Sort by
      </Button>
    </div>
  );
};
export default ListControls;
