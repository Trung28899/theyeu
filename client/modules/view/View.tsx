import React from "react";
import classes from "./View.module.scss";
import ImageSection from "./containers/ImageSection/ImageSection";
import TimeAndQuote from "./containers/TimeAndQuote/TimeAndQuote";
import Gallery from "./containers/Gallery/Gallery";
import Memories from "./containers/Memories/Memories";

function View() {
  return (
    <div className={classes.container}>
      <ImageSection />
      <TimeAndQuote />
      <Gallery />
      <Memories />
    </div>
  );
}

export default View;
