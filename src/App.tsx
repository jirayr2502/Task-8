import { useState } from "react";
import "./App.css";
import { IUser, InputUser } from "./types";
import { UserContext } from "./context";
import { AddUser } from "./components/AddUser";
import { UserList } from "./components/UserList";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);

  const removeUser = (id: number) => {
    setUsers(users.filter((user) => user.id != id));
  };

  const handleAdd = (user: InputUser): void => {
    setUsers([...users, { ...user, id: Date.now() }])
  };


  return (
    <>
      <UserContext.Provider value={{ users, removeUser, handleAdd }}>
        <AddUser />
        <UserList />
      </UserContext.Provider>
    </>
  );
}

export default App;
