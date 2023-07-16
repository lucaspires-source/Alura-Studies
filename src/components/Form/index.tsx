import React from "react";
import Button from "../Button";
import style from './Form.module.scss'
function Form() {
  return (
    <form className={style.novaTarefa}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add a new subject</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="What you want to study?"
          required
        />
      </div>
      <div>
        <label form="time">Time</label>
        <input
          type="time"
          step="1"
          name="time"
          id="time"
          min="00:00:00"
          max="01:30:00"
        />
      </div>
      <Button />
    </form>
  );
}

export default Form;
