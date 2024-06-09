export type TPassword = {
  title: string;
  password: string;
  description: string;
};

export type TStoredPassword = {
  id: string;
} & TPassword;
