import Button from "@/components/Button/Button";

const DeleteConfirmation = () => (
  <div>
    <div className="flex flex-row gap-4 justify-end">
      <Button variant="secondary">Cancel</Button>
      <Button variant="delete">Delete Goal</Button>
    </div>
  </div>
);

export default DeleteConfirmation;
