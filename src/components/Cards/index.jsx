
import React from "react";
import MCard from "../Card";
import { Grid } from "@mui/material";
import styles from "./index.modules.css";




const Cards = ({ data, user, onChangeProductLike }) => {
  
  return (
    
    <Grid container className={styles.cards} spacing={2}>
      {data.map((item) => (
        <MCard key={item._id} 
        {...item} 
        user={user} 
        onChangeProductLike={onChangeProductLike} />
      ))}
      
    </Grid>
    
  );
 
};


export default Cards;

