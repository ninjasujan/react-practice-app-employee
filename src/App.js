import React, { useState } from "react";
import Card from "./component/UI/Card";
import ErrorModal from "./component/UI/ErrorModal";
import AddUser from "./component/Users/AddUser";
import UsersList from "./component/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (userName, age) => {
    setUserList((prevList) => {
      return [...prevList, { userName, age }];
    });
  };

  return (
    <React.Fragment>
      <ErrorModal title="undefined name" message="clear the error" />
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </React.Fragment>
  );
}

export default App;
