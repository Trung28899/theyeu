import React from "react";
import classes from "./MemoryModal.module.scss";
import MemoryCard from "../MemoryCard/MemoryCard";
import type { ImageData } from "../../types";

interface Props {
  memory: ImageData | null;
  modalOpen: boolean;
  close: () => void;
}

function MemoryModal({ memory, modalOpen, close }: Props) {
  const backDropClasses = [
    classes.BackDrop,
    modalOpen ? classes.open : classes.close,
  ];

  return (
    <div>
      <div className={backDropClasses.join(" ")} onClick={close}></div>
      {memory && modalOpen && (
        <div className={classes.cardContainer}>
          <MemoryCard
            isOpen
            title={memory.title}
            description={memory.description}
            date={memory.date}
            image={memory.image}
            isModal
            closeModal={close}
          />
        </div>
      )}
    </div>
  );
}

export default MemoryModal;
