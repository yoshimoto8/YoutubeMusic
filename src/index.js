import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pomodoro from "./container/Pomodoro";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Pomodoro />, document.getElementById("root"));
registerServiceWorker();
