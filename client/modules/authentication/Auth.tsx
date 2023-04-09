import React from "react";
import classes from "./Auth.module.scss";
import AuthForm from "./containers/AuthForm";

const Auth: React.FC = () => {
  return (
    <div className={classes.container}>
      <AuthForm />
    </div>
  );
};

export default Auth;
