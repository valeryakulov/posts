import React from "react";
import "./index.modules.css"
import s from "./index.modules.css";

const Network = ({ src, srcImg }) => {
  return (
    <a src={src} className={s.network}>
      <img src={srcImg} />
    </a>
  );
};

const Connection = ({ title, phone, site, socialNetworks }) => {
  return (
    <div className={s.connection}>
      <div className={s.item}>{title}</div>
      <div className={s.item}>{phone}</div>
      <div className={s.item}>{site}</div>
      <div className={s.item}>
        {socialNetworks.map((network) => (
          <Network key={network.src} srcImg={network.srcImg} />
        ))}
      </div>
    </div>
  );
};

export default Connection;