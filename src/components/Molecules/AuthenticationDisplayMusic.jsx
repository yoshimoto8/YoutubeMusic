import React from "react";

const AuthenticationDisplayMusic = props => {
  const { displayMusic } = props;
  return (
    <div className="AuthenticationDisplayMusic-wrapper">
      {displayMusic.map((data, index) => {
        console.log(data);
        return (
          <div key={index}>
            <img src={data.alubmImage} alt="" width="150px" height="150px" />
          </div>
        );
      })}
    </div>
  );
};

export default AuthenticationDisplayMusic;
