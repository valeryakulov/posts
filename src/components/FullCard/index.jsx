
import React from "react";
import { Link } from "react-router-dom";
import s from "./index.modules.css";



const FullCards = ({
      _id,
      title,
      text,
      author,
      created_at,
      updated_at,
      image,
      likes,
      user,
      onChangeProductLike,
      isPublished,
  }) => { return (

<div>
<Link className={s["button-back"]} to="/">Назад</Link>
<div  className={s.title}>{title}</div>
<div className={s.author} >{author?.author}</div>
<div className={s.user} >{user?.user}</div>
<div className={s.created_at}>{created_at}</div>
<div className={s.updated_at} >{updated_at}</div>
<div className={s.text} >{text}</div>
<div className={s.image} >{image}</div>
</div>
);
  }

export default FullCards;