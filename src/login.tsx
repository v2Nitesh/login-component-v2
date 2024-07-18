import React, { useState } from "react";
import "../src/login.css";
export interface LoginProps {
  isPrimaryButton?: boolean;
  titleColor?: string;
  buttonSize?: "small" | "medium" | "large";
  buttonLabel: string;
  loginClick?: () => void;
  emailRegex?: string;
  passwordRegex?: string;
}

export const Login = ({
  isPrimaryButton = false,
  buttonSize = "medium",
  titleColor,
  buttonLabel,
  ...props
}: LoginProps) => {
  const mode = isPrimaryButton
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailDefaultRegex = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/";
  const emailRegex =
    props.emailRegex && props.emailRegex?.length > 0
      ? props.emailRegex
      : emailDefaultRegex;
  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError("");
    setPasswordError("");

    // Check if the user has entered both fields correctly
    if ("" === email) {
      setEmailError("Please enter your email");
      return;
    }

    if (!new RegExp(emailRegex).test(email)) {
      setEmailError("Please enter a valid email");
      return;
    }

    if ("" === password) {
      setPasswordError("Please enter a password");
      return;
    }

    if (
      props.passwordRegex &&
      props.passwordRegex?.length > 0 &&
      !new RegExp(props.passwordRegex).test(password)
    ) {
      setPasswordError("The password must be 8 characters or longer");
    } else if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
    props.loginClick && props.loginClick();
  };
  return (
    <div className={"mainContainer"}>
      <div className={"titleContainer"}>
        <div style={{ color: titleColor }}>Login</div>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={"inputBox"}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={"inputContainer"}>
        <input
          className={[
            "storybook-button ",
            ` storybook-button--${buttonSize} `,
            mode,
          ].join(" ")}
          type="button"
          value={buttonLabel.length ? buttonLabel : "Log in"}
          onClick={onButtonClick}
        />
      </div>
    </div>
  );
};
