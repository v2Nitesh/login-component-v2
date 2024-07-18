"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Login: () => Login,
  V2Button: () => V2Button,
  helloWorld: () => helloWorld
});
module.exports = __toCommonJS(src_exports);

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
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Login = ({
  isPrimaryButton = false,
  buttonSize = "medium",
  titleColor,
  buttonLabel,
  ...props
}) => {
  const mode = isPrimaryButton ? "storybook-button--primary" : "storybook-button--secondary";
  const [email, setEmail] = (0, import_react.useState)("");
  const [password, setPassword] = (0, import_react.useState)("");
  const [emailError, setEmailError] = (0, import_react.useState)("");
  const [passwordError, setPasswordError] = (0, import_react.useState)("");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mainContainer", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "titleContainer", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { color: titleColor }, children: "Login" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "inputContainer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          value: email,
          placeholder: "Enter your email here",
          onChange: (ev) => setEmail(ev.target.value),
          className: "inputBox"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "errorLabel", children: emailError })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "inputContainer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          value: password,
          placeholder: "Enter your password here",
          onChange: (ev) => setPassword(ev.target.value),
          className: "inputBox"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: "errorLabel", children: passwordError })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "inputContainer", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_jsx_runtime2 = require("react/jsx-runtime");
var V2Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}) => {
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Login,
  V2Button,
  helloWorld
});
