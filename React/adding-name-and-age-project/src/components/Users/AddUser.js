import { useState } from "react";

import Card from "../Card/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import classes1 from "./Button.module.css";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setAge] = useState("");
  const [error, setError] = useState();

  const userNameChangeHandler = (props) => {
    setEnteredUserName(props.target.value);
  };

  const ageChangeHandler = (props) => {
    setAge(props.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Name and Age",
        message: "Enter non-empty values for name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Age should be more than 0",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <button className={classes1.button} type="submit">
            Add User
          </button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
