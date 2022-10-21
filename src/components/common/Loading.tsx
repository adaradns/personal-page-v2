import React, { useState } from "react";
import "../../css/Loading.css";
import { Navigate } from "react-router-dom";



function AnimatedSplash(props: any) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
        <div className="ball"></div>
      </div>
    </div>
  );
}

function Loading(props: any) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Navigate to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Loading;
