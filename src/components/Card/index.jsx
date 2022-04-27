
import React, { useCallback, useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  Collapse,
  Avatar,
  CardContent,
  CardActions,
  IconButton,
 
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import moment from "moment";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Link } from "react-router-dom";
import s from "./index.modules.css";
import { Typography } from '@mui/material';
import { ReactComponent as Save } from "./img/save.svg";
import classNames from "classnames";
import cn from "classnames";
import "../../index.css";
import api from "../../utils/Api";
import Btn from "../../components/Btn";

const MCard = ({
 
  _id,
  title,
  text,
  author,
  created_at,
  updated_at,
  likes,
  user,
  onChangeProductLike,
}) => {
  const [opened, setOpened] = useState(false);

  const ExpandMore = styled((props) => {
    const { opened, ...other } = props;
    return <IconButton {...other} />;
  })(({ opened }) => ({
    transform: opened ? "rotate(180deg)" : "rotate(0deg)",
  }));

 
  const onClick = () => setOpened(!opened);
  dayjs.locale("ru");

  const isFavourite = likes.some((el) => el === user._id);
  
  const handleClick = (e) => {
    e.preventDefault();
    onChangeProductLike(!isFavourite, _id);
  };

  const handleDelete = useCallback((e) =>{
    e.stopPropagation();
    Promise.resolve(api.deletePost(_id)).then(() => {
      window.location.reload();
    });
  });
 
  return (
    <Grid item xs={4}>
      <Card className={s.card}>
        <CardHeader
          avatar={<Avatar alt={author?.name} src={author?.avatar} />}
          title={author?.email}
          subheader={
            <div style={{ diplay: "flex", flexDirection: "column" }}>
              <div>
                {moment(created_at).locale("ru").format("MMMM:Do:YYYY")}
              </div>
              <div>{dayjs(updated_at).format("MMMM/DD/YYYY")}</div>
            </div>
          }
        />
        <Save
          onClick={handleClick}
          className={classNames(s.favourite, {
            [s.checked]: isFavourite,
          })}
        />
        <Link to={`/PostCard/${_id}`} className={s.link}>
       <div className={s.author}></div>
        <CardContent>
          <Typography className={s.typographyy} variant="h6">{title}</Typography>
          <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item xs zeroMinWidth>
                <Typography className={s.typography} variant="body2" noWrap>{text}</Typography>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        </Link>
        <CardActions >
          <ExpandMore opened={opened} onClick={onClick}>
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={opened}>
          <CardContent>
            <Typography>{text}</Typography>
          </CardContent>
        </Collapse>
<Btn onClick={handleDelete} text={"Delete"} />
      </Card>
    </Grid>
  );
};

export default MCard;
