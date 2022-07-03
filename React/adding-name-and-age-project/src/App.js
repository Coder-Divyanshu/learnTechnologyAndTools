import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userData, setUserData] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserData((prevData) => {
      return [
        { name: uName, age: uAge, id: Math.random().toString() },
        ...prevData,
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={userData}></UserList>
    </div>
  );
}

export default App;
