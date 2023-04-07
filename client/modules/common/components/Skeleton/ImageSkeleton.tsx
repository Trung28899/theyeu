import React from "react";
import classes from "./ImageSkeleton.module.scss";

interface Props {
  height: string;
}

function ImageSkeleton({ height }: Props) {
  return (
    <div
      className={classes.skeleton}
      style={{ height: height, minHeight: "50px" }}
    >
      <div className={classes.skeletonImage}></div>
    </div>
  );
}

export default ImageSkeleton;
