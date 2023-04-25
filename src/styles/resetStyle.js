import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
${reset}
:
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #fffaf0;
  min-width: 900px;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  border: 0;
  background-color: inherit;
}

button:not(:disabled) {
  cursor: pointer;
}

.a11y-hidden {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}

/* button */
.black-btn {
  display: block;
  width: 100%;
  padding: 0;
  background: #29363d;
  color: white;
  height: 48px;
  border: 0;
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
}

.black-btn:disabled {
  opacity: 0.2;
}

/* form */
.label-style,
.input-style {
  display: block;
  width: 100%;
  box-sizing: border-box;
}

.input-style {
  border: none;
  box-shadow: 0 1px 0 0 #677880;
  height: 48px;
  transition: all 0.2s;
  border-radius: 4px 4px 0 0;
  padding: 0 16px;
  font-size: 16px;
}

.input-style:hover {
  box-shadow: 0 2px 0 0 #2e6ff2;
}

.input-style:focus {
  outline: none;
  box-shadow: 0 0 0 2px #2e6ff2;
  border-radius: 4px;
}

.label-style {
  font-size: 14px;
  color: #29363d;
  margin-bottom: 8px;
}
`;

export default GlobalStyles;
