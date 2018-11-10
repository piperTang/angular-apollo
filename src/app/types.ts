export type Course = {
  id: string;
  username: string;
  email: string;
  password: string;
}

export type Query = {
  users: Course[];
}