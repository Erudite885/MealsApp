import React from 'react';
import {BsHandThumbsUp} from 'react-icons/bs'
import { useGlobalContext } from '../store/context'

import classes from './meals.module.css'

const Meals = () => {
    const {isLoading, meals} = useGlobalContext();
      
    // console.log(isLoading)
    if(isLoading){
        return <section>
            <h4>Loading...</h4>
        </section>
    }

    if (meals.length < 1) {
      return <section>
        <h4>
          No matching items found. Try Another search.
        </h4>
      </section>
    }
    
    return (
        <section className={classes.sectionCenter}>
            {meals.map((meal)=>{
                const { idMeal, strMeal: title, strMealThumb: img } = meal
                return (
                  <article key={idMeal} className={classes.singleMeal}>
                    <img
                      src={img}
                      alt={`${title} image`}
                    //   style={{ width: "200px" }}
                      className={classes.img}
                    />
                    <footer>
                      <h5>{title}</h5>
                      <button className={classes.likeBtn}>
                        <BsHandThumbsUp />
                      </button>
                    </footer>
                  </article>
                );
            })}
        </section>
    )
}

export default Meals;