import { useContext } from "react";
import { UserContext } from "../context";

export const UserList = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error: UserContext is not available");
  }

  const { users, removeUser } = context;

  return (
    <>
      <h3>User List</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.salary} AMD</td>
                <td>
                  <button onClick={() => removeUser(user.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
