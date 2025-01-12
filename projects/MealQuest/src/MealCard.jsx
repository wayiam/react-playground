
import React from "react";
import "./MealCard.css"


const MealCard = ({ strMealThumb, strMeal, strInstructions, strYoutube }) => {
  
  const instructionsArray = strInstructions.split(". ").filter(step => step.trim() !== "");

  return (
    <div className="meal-card">
      <img src={strMealThumb} alt={strMeal} className="meal-card__thumbnail" />
      <div className="meal-card__content">
        <h2 className="meal-card__title">{strMeal}</h2>
        <ul className="meal-card__steps">
          {instructionsArray.map((step, index) => (
            <li key={index} className="meal-card__step">
              {step.trim()}.
            </li>
          ))}
        </ul>
        <a
          href={strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="meal-card__youtube-link"
        >
          Watch on YouTube
        </a>
      </div>
    </div>
  );
};

export default MealCard;
