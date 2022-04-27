
import React from "react";
import "./index.css";
import {Link} from "react-router-dom";
import s from "./index.css"

const Button = ({ text, onClick }) => {
return (
<button className="button"><Link to="/PostCreate">CreatePost</Link>

</button>
)};
export default Button;