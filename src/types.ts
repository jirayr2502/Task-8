export interface IUser {
  id: number;
  name: string;
  age: number;
  salary: number;
  isMaried?: boolean;
}
export interface IContext {
  users: IUser[];
  removeUser: (id:number) => void
  handleAdd: (user: InputUser) => void
}


export interface IAddUser {
  name: string
  age: string
  salary: string
}

export type InputUser = Omit<IUser, 'id'>