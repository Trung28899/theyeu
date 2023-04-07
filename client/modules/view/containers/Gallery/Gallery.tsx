import React, { useState } from "react";
import { useDemoData } from "../../hooks/useDemoData";
import classes from "./Gallery.module.scss";
import GalleryImage from "../../components/GalleryImage/GalleryImage";
import MemoryModal from "../../components/MemoryModal/MemoryModal";
import type { ImageData } from "../../types";

function Gallery() {
  const { data } = useDemoData();
  const [modalOpen, setModalOpen] = useState(false);
  const [memoryData, setMemoryData] = useState<ImageData | null>(null);

  return (
    <div className={classes.grid}>
      {data.slice(0, 8).map((item) => (
        <GalleryImage
          imageData={item}
          key={item.id}
          onClick={() => {
            setModalOpen(true);
            setMemoryData(item);
          }}
        />
      ))}

      <MemoryModal
        modalOpen={modalOpen}
        memory={memoryData}
        close={() => {
          setModalOpen(false);
          setMemoryData(null);
        }}
      />
    </div>
  );
}

export default Gallery;
