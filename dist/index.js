// src/functions.ts
function helloWorld({ firstName, lastName, age }) {
  console.log("Hello!");
  console.log(`Your first name is ${firstName}`);
  if (lastName) {
    console.log(`Your last name is ${lastName}`);
  }
  if (age) {
    console.log(`Your age name is ${age}`);
  }
}

// src/login.tsx
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
var Login = ({
  isPrimaryButton = false,
  buttonSize = "medium",
  titleColor,
  buttonLabel,
  ...props
}) => {
  const mode = isPrimaryButton ? "storybook-button--primary" : "storybook-button--secondary";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const emailDefaultRegex = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/";
  const emailRegex = props.emailRegex && props.emailRegex?.length > 0 ? props.emailRegex : emailDefaultRegex;
  const onButtonClick = () => {
    setEmailError("");
    setPasswordError("");
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
    if (props.passwordRegex && props.passwordRegex?.length > 0 && !new RegExp(props.passwordRegex).test(password)) {
      setPasswordError("The password must be 8 characters or longer");
    } else if (password.length < 7) {
      setPasswordError("The password must be 8 characters or longer");
      return;
    }
    props.loginClick && props.loginClick();
  };
  return /* @__PURE__ */ jsxs("div", { className: "mainContainer", children: [
    /* @__PURE__ */ jsx("div", { className: "titleContainer", children: /* @__PURE__ */ jsx("div", { style: { color: titleColor }, children: "Login" }) }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { className: "inputContainer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          value: email,
          placeholder: "Enter your email here",
          onChange: (ev) => setEmail(ev.target.value),
          className: "inputBox"
        }
      ),
      /* @__PURE__ */ jsx("label", { className: "errorLabel", children: emailError })
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsxs("div", { className: "inputContainer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          value: password,
          placeholder: "Enter your password here",
          onChange: (ev) => setPassword(ev.target.value),
          className: "inputBox"
        }
      ),
      /* @__PURE__ */ jsx("label", { className: "errorLabel", children: passwordError })
    ] }),
    /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx("div", { className: "inputContainer", children: /* @__PURE__ */ jsx(
      "input",
      {
        className: [
          "storybook-button ",
          ` storybook-button--${buttonSize} `,
          mode
        ].join(" "),
        type: "button",
        value: buttonLabel.length ? buttonLabel : "Log in",
        onClick: onButtonClick
      }
    ) })
  ] });
};

// src/V2Button.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var V2Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ jsx2(
    "button",
    {
      type: "button",
      className: ["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      ),
      style: { backgroundColor },
      ...props,
      children: label
    }
  );
};
export {
  Login,
  V2Button,
  helloWorld
};
