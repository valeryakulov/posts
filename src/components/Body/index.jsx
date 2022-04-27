import React from "react";
import "./index.css";

const Body = ({children}) => {
   return (
      <main className="main">{children}</main>
   );
};

export default Body;