import React from "react";

const AuthenticationTwitterButton = props => {
  return (
    <a className="fl_tw2" onClick={() => props.login()}>
      <i className="fa fa-twitter" /> <span>Twitter ログイン</span>
    </a>
  );
};

export default AuthenticationTwitterButton;
