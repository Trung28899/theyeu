import React from "react";
import classes from "./ImageSection.module.scss";
import Avatar from "../../components/Avatar/Avatar";
import OptimizedImage from "@/modules/common/components/OptimizedImage/OptimizedImage";
import CaiCay from "public/viewpage/caicay.jpg";

function ImageSection() {
  // const coverImg =
  //   "https://firebasestorage.googleapis.com/v0/b/onthecardimage.appspot.com/o/images%2Ftrevortrinh28899%40gmail.com%2Fcover4.jpg?alt=media&token=f2f3950d-d749-441b-9fb6-236b585c4839";

  return (
    <div className={classes.container}>
      <OptimizedImage src={CaiCay} className={classes.coverImg} alt="" />

      <div className={classes.avatarContainer}>
        <Avatar
          name="Trung Trịnh"
          src="https://firebasestorage.googleapis.com/v0/b/onthecardimage.appspot.com/o/images%2Ftrungg%40gmail.com%2F6487AFEC-D9C7-4DBA-86CF-367A98781326.jpeg?alt=media&token=4d11a0d3-a111-4123-8a89-a15e002ae312"
        />
        <Avatar
          name="Minh Huyền"
          src="https://firebasestorage.googleapis.com/v0/b/onthecardimage.appspot.com/o/images%2Fminhhuyen.lmh%40gmail.com%2F78911ced5444a81af155.jpg?alt=media&token=302ca4d4-cc02-4ba3-8aaa-392da6f51845"
        />
      </div>
    </div>
  );
}

export default ImageSection;
