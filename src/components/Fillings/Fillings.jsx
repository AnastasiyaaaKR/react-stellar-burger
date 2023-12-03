import React from "react";
import Ingridient from "../Ingridient/Ingridient";
import styles from "./Fillings.module.css";

const Fillings = ({fillings, showIngridientsModal}) => {
  return (
    <div className={`${styles.ingridient__section} pl-4 mb-8`}>
      <p className="text text_type_main-medium">Ингредиенты</p>
      <div className={`mb-10`}>
        <div className={`${styles.ingridient}`}>
          {fillings.map((item) => {
            return (
              <div className="mb-8">
                <Ingridient 
                  showIngridientsModal={() => {showIngridientsModal(item)}}
                  item = {item}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  key={item._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Fillings