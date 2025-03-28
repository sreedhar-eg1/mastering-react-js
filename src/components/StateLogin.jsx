import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail } from "../util/validation";
import { useInput } from "./hooks/useInput";

export default function StateLogin() {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");

  const {
    value: emailValue,
    handleValuechange: handleEmailChange,
    handleInputBlur: handleEmailBlur,
    hasError: isEmailValid
  } = useInput("", isEmail);
  const {
    value: passwordValue,
    handleValuechange: handlePasswordChange,
    handleInputBlur: handlePasswordBlur,
    hasError: isPasswordValid
  } = useInput("", hasMinLength);

  // const [enterdValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [inputBlured, setInputBlured] = useState({
  //   email: false,
  //   password: false,
  // });

  // const isEmailValid = inputBlured.email && !isEmail(enterdValues.email);
  // const isPasswordValid = inputBlured.password && !hasMinLength(enterdValues.password, 6);

  // function handleInputBlur(identifier) {
  //   setInputBlured((preState) => ({ ...preState, [identifier]: true }));
  // }

  // function handleValuechange(identifier, event) {
  //   setEnteredValues((prevValues) => ({
  //     ...prevValues,
  //     [identifier]: event.target.value,
  //   }));
  // }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={handleEmailBlur}
          onChange={handleEmailChange}
          error={isEmailValid && "Please enter a valid email address."}
          value={emailValue}
        />
        {/* <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={() => handleInputBlur("email")}
            // onChange={handleEmailChange}
            // value={enteredEmail}
            onChange={(e) => handleValuechange("email", e)}
            value={enterdValues.email}
          />
          <div className="control-error">
            {isEmailValid && <p>Please enter a valid email address.</p>}
          </div>
        </div> */}

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={handlePasswordBlur}
          onChange={handlePasswordChange}
          error={isPasswordValid && "Please enter a valid password."}
          value={passwordValue}
        />
        {/* <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onBlur={() => handleInputBlur("password")}
            // onChange={handlePasswordChange}
            // value={enteredPassword}
            onChange={(e) => handleValuechange("password", e)}
            value={enterdValues.password}
          />
        </div> */}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
