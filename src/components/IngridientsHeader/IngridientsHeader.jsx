import React from "react";
import styles from "./IngridientsHeader.module.css";

const IngridientsHeader = () => {
  return (
    <div>
      <h1
        className={`${styles.ingridients__header}text text_type_main-large mb-5`}
      >
        Соберите бургер
      </h1>
    </div>
  );
};

export default IngridientsHeader;
