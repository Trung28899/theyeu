import React from "react";
import MemoryCard from "../../components/MemoryCard/MemoryCard";
import { useDemoData } from "../../hooks/useDemoData";
import classes from "./Memories.module.scss";
import { useTranslation } from "react-i18next";

function Memories() {
  const { data } = useDemoData();
  const { t } = useTranslation();

  const memories = data.map((item, index) => (
    <MemoryCard
      isOpen={index === 0}
      title={item.title}
      description={item.description}
      date={item.date}
      image={item.image}
      key={index}
    />
  ));

  return (
    <div className={classes.container}>
      <p className={classes.sectionTitle}>{t("view.memories")}</p>
      {memories}
    </div>
  );
}

export default Memories;
