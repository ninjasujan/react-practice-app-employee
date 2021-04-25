import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";
import Button from "../UI/Button";
import classes from "./ErrorModal.module.css";

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>OK</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return ReactDom.createPortal(
    <Modal title={props.title} message={props.message} />,
    document.getElementById("overlay-portal")
  );
};

export default ErrorModal;
