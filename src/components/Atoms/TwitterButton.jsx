import React from "react";
import "./styles/TwitterButton.css";

const TwitterButton = props => {
  return (
    <a className="fl_tw2" onClick={() => props.login()}>
      <i classNmae="fa fa-twitter" /> <span>Twitter ログイン</span>
    </a>
  );
};

export default TwitterButton;
