import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import MealCard from './MealCard';
import "./styles.css"


const MealQuest = () => {

    const [meals, setMeals] = useState([]);

    const [search, setSearch] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
            response.data.meals.length && setMeals(response.data.meals)
        }
        fetchData();
    }, [search])


    const filteredMeals = meals.filter(({ strMeal }) =>
        strMeal.toLowerCase().includes(search.toLowerCase())
    );

    const list = filteredMeals.map(({ idMeal, strMealThumb, strMeal, strInstructions, strYoutube }) => {
        return (<section key={idMeal}>
            <MealCard strMealThumb={strMealThumb} strMeal={strMeal} strInstructions={strInstructions} strYoutube={strYoutube} />
        </section>)
    })

    return (
        <>
        <div className="navbar">
          <div className="navbar-brand">MealQuest</div>
          <input 
            type="text" 
            id="search-input" 
            placeholder="Search for meals" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
          <div className="navbar-links">
            <a href="#about">About</a>
          </div>
        </div>
        <div className="container">
          {list}
        </div>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-brand">MealQuest</div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
            <div className="footer-social">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </footer>
      </>           
    )
}

export default MealQuest