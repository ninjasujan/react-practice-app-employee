import React from "react";
import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.userName}>
            {user.userName} ({user.age} years old.)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
