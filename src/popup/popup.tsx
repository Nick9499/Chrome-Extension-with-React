import React from "react";
import ReactDom from "react-dom";

const test = <p>Hello world</p>;
const root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(test, root);
