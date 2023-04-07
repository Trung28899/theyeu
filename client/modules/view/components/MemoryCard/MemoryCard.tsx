import React, { useState, useEffect } from "react";
import styles from "./MemoryCard.module.scss";
import OptimizedImage from "@/modules/common/components/OptimizedImage/OptimizedImage";
import DownIcon from "@/public/icons/down.svg";
import UpIcon from "@/public/icons/up.svg";
import CloseIcon from "@/public/icons/close.svg";
import type { ImageData } from "../../types";

interface Props extends Omit<ImageData, "id"> {
  isOpen?: boolean;
  isModal?: boolean;
  closeModal?: () => void;
}

const MemoryCard = (props: Props) => {
  const { title, description, date, image } = props;
  const { isOpen, isModal, closeModal } = props;

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (isOpen) setIsExpanded(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.card}>
      {!isExpanded && (
        <div className={styles.headContainer} onClick={toggleExpand}>
          <div>
            <p className={styles.dateCollapsed}>{date}</p>
            <h2 className={styles.titleCollapsed}>{title}</h2>
          </div>
          <OptimizedImage className={styles.iconImage} src={DownIcon} alt="" />
        </div>
      )}

      {isExpanded && (
        <div className={styles.expandable}>
          <div
            className={styles.headContainer}
            onClick={isModal ? closeModal : toggleExpand}
          >
            <div>
              <p className={styles.date}>{date}</p>
              <h2 className={styles.title}>{title}</h2>
            </div>
            <OptimizedImage
              className={styles.iconImage}
              src={isModal ? CloseIcon : UpIcon}
              alt=""
            />
          </div>
          <p className={styles.description}>{description}</p>
          <OptimizedImage
            src={image}
            className={styles.image}
            skeletonHeight="270px"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default MemoryCard;
