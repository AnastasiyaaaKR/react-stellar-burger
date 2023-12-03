import React from "react";
import styles from './Buns.module.css';
import Ingridient from "../Ingridient/Ingridient";

function Buns ({buns, showIngridientsModal}) {
  return (
    <div className={`${styles.ingridient__section} pl-4`}>
      <p className="text text_type_main-medium mt-10">Булки</p>
      <div className={`mb-10`}>
        <div className={`${styles.ingridient}`}>
            {buns.map((item) => {
            return (
              <Ingridient 
                showIngridientsModal={() => {showIngridientsModal(item)}}
                item = {item}
                name={item.name}
                image={item.image}
                price={item.price}
                key={item._id}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Buns