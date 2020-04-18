import React from "react";
import { render } from "react-dom";

function Hello() {
  return <p>Hello World!</p>;
}

render(<Hello />, document.getElementById("app"));
