import React from "react";
import "./index.modules.css";
import Connection from "./Connection";
import className from "classnames";
import s from "./index.modules.css";

import telegram from "./img/telegram.svg";
import instagram from "./img/instagram.svg";
import viber from "./img/viber.svg";
import whatsapp from "./img/whatsapp.svg";
import vk from "./img/vk.svg";




 const AppFooter = () =>{
  return (
    <footer className={s.footer}>
      <div>
        <span className = {s.sig}> Digital NOmads ©2022 Created by ABB</span>
        </div>
        <div className = {s.Connection}>
        <Connection 
        socialNetworks={[
          { src: "telegram", srcImg: telegram },
          { src: "instagram", srcImg: instagram },
          { src: "viber", srcImg: viber },
          { src: "whatsapp", srcImg: whatsapp },
          { src: "vk", srcImg: vk },
        ]}
        />
        </div>
  </footer>
 );
  };
export default AppFooter;