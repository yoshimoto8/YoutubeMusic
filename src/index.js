import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Main from "./container/Main";
// import SidebarExample from "./container/main2";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
