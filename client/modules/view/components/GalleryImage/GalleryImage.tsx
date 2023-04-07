// import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";
import classes from "./GalleryImage.module.scss";
import OptimizedImage from "@/modules/common/components/OptimizedImage/OptimizedImage";
import type { ImageType, ImageData } from "../../types";

interface Props {
  imageData: ImageData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

function GalleryImage({ imageData, onClick }: Props) {
  const { image } = imageData;

  return (
    <div onClick={onClick}>
      <OptimizedImage src={image} className={classes.image} alt="" />
    </div>
  );
}

export default GalleryImage;
