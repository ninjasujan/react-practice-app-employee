import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  return (
    <Card className={classes.input}>
      <form>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="numner" />
      </form>
    </Card>
  );
};

export default AddUser;
