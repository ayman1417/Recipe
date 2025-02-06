import React, { useState } from 'react'
import "../../styles/mian.scss"
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { mealContext } from '../../Contexts/MealIdContext';
import { useNavigate } from 'react-router-dom';
// import { Button, ButtonGroup } from "@heroui/button";
export default function Home() {

    const [SelectedCat, setSelectedCat] = useState("All");
    const { mealId, setMealId } = useContext(mealContext);
    const navigate = useNavigate();

    async function getMeals() {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s")
        return res.data.meals;
    }
    async function getSpecificMeals(CategoryName) {
        if (CategoryName == "All") {
            return await getMeals();
        }
        const res = await axios.get(`https://themealdb.com/api/json/v1/1/filter.php?c=${CategoryName}`)
        return res.data.meals;
    }

    const { data: meals } = useQuery({
        queryKey: ["meals", SelectedCat],
        queryFn: () => getSpecificMeals(SelectedCat),
    })
    async function getCategories() {
        const res = await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        return res.data.categories;
    }

    const { data: categories } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories
    })

    function getMealDetails(id) {
        setMealId(id);
        navigate("/meal");
    }
    console.log(meals);
    console.log(categories);



    return (
        <div className='home-section'>
            <div className="">
                <h1 className=''>Learn, Cook, Eat Your Food</h1>
                <div>
                    <select
                        value={SelectedCat}
                        onChange={(e) => setSelectedCat(e.target.value)}
                        className="category-select"
                    >
                        <option value="All">All</option>
                        {categories?.map((category) => (
                            <option key={category.idCategory} value={category.strCategory}>
                                {category.strCategory}
                            </option>
                        ))}
                    </select>

                    <ul className="list-categories">
                        <li>
                            <button className={SelectedCat === "All" ? "active" : ""} onClick={() => setSelectedCat("All")}>
                                All
                            </button>
                        </li>
                        {categories?.map((category) => (
                            <li key={category.idCategory}>
                                <button
                                    className={SelectedCat === category.strCategory ? "active" : ""}
                                    onClick={() => setSelectedCat(category.strCategory)}
                                >
                                    {category.strCategory}
                                </button>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className=" mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-14">

                    {meals?.map((meal) => (
                        <div className="card  ">
                            <div className="img-container">
                                <img src={meal.strMealThumb} alt="" />
                            </div>
                            <h3 className="-mt-10">{meal.strMeal}</h3>
                            <div className="icon-container">
                                <i className="fa-solid fa-earth-africa"></i>
                                <p className="">{meal.strArea}</p>
                            </div>
                            <button onClick={()=>getMealDetails(meal.idMeal)} className='btn-view'>View Recipe</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
