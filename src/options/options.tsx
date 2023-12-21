import React from "react";
import ReactDom from "react-dom";
import "./options.css";

const test = <img src="icon.png" />;
const root = document.createElement("div");
document.body.appendChild(root);

ReactDom.render(test, root);
