export type Deposit = {
  id: string;
  amount: number;
  createdAt: Date;
  note: string;
};

export type Goal = {
  id: string;
  createdAt: Date;
  name: string;
  target: number;
  deadline: string;
  deposits: Deposit[];
};
