import React from "react";
import styles from './sauces.module.css'
import Ingridient from "../Ingridient/Ingridient";

const Sauces = ({sauces, showIngridientsModal}) => {
  return (
    <div className={`${styles.ingridient__section} pl-4`}>
      <p className="text text_type_main-medium">Cоусы</p>
      <div className={`${styles.ingridient}`}>
        <div className={`${styles.ingridient}`}>
          {sauces.map((item) => {
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

export default Sauces