import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./TimeAndQuote.module.scss";
import { getDaysSinceDate } from "../../utils/time_helper";

function TimeAndQuote() {
  const { t } = useTranslation();
  const dayNumber = getDaysSinceDate("15/06/2022");

  return (
    <div className={classes.container}>
      <p className={classes.title}>{t("view.timeAndQuote.beenTogether")}</p>
      <p className={classes.dayText}>
        <span>{dayNumber}</span> {t("view.timeAndQuote.day")}
      </p>
      <p className={classes.quote}>"{t("view.timeAndQuote.testQuote")}"</p>
    </div>
  );
}

export default TimeAndQuote;
