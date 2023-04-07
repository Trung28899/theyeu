import React from "react";
import classes from "./Avatar.module.scss";
import OptimizedImage from "@/modules/common/components/OptimizedImage/OptimizedImage";

interface Props {
  src: string;
  name: string;
}

function Avatar({ src, name }: Props) {
  return (
    <div className={classes.container}>
      <OptimizedImage src={src} className={classes.avatarImg} alt="" />
      <p className={classes.name}>{name}</p>
    </div>
  );
}

export default Avatar;
