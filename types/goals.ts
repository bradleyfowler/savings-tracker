type Deposit = {
  id: string;
  amount: number;
  note: string;
};

export type Goal = {
  id: number;
  name: string;
  target: number;
  deadline: string;
  deposits: Deposit[];
};
