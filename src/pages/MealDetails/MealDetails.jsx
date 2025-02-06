import React from 'react'
import a from "../../assets/Alogo.jpeg"
import "../../styles/meal.scss"
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { mealContext } from '../../Contexts/MealIdContext';
export default function MealDetails() {
    // const { id } = useParams();
    const { mealId, setMealId } = useContext(mealContext);
    async function getMeal() {
        const res = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)

        return res.data.meals[0];
    }

    const { data: meal } = useQuery({
        queryKey: ["Meal"],
        queryFn: getMeal
    })

    console.log("this is my meal", meal);


    return (
        <div className='meal-setion'>
            <h1>{meal?.strMeal}</h1>
            <div className="content grid lg:grid-cols-3 gap-5">
                <div className="img-content">
                    <div className=" img-container">
                        <img src={meal?.strMealThumb} alt="" className='' />
                    </div>
                    <div className="links">
                        <a href={meal?.strYoutube} target='_blank' className='btn-youtube'>
                            <i className="fa-brands fa-youtube"></i>
                            <p>Youtube</p>
                        </a>
                        <a href={meal?.strSource} target='_blank' className='btn-source'>
                            <i className="fa-solid fa-earth-americas"></i>
                            <p>source</p>
                        </a>
                    </div>
                </div>
                <div className="p-content">
                    <p>{meal?.strInstructions}</p>
                </div>
                <div className="Ingredients">
                    <h2>Ingredients</h2>
                    <div className="content">

                        {meal?.strIngredient1?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient1}:</p>
                                <p>{meal?.strMeasure1}</p>
                            </div>
                        }
                        {meal?.strIngredient2?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient2}:</p>
                                <p>{meal?.strMeasure2}</p>
                            </div>
                        }
                        {meal?.strIngredient3?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient3}:</p>
                                <p>{meal?.strMeasure3}</p>
                            </div>
                        }
                        {meal?.strIngredient4?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient4}:</p>
                                <p>{meal?.strMeasure4}</p>
                            </div>
                        }

                        {meal?.strIngredient5?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient5}:</p>
                                <p>{meal?.strMeasure5}</p>
                            </div>
                        }
                        {meal?.strIngredient6?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient6}:</p>
                                <p>{meal?.strMeasure6}</p>
                            </div>

                        }
                        {meal?.strIngredient7?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient7}</p>
                                <p>{meal?.strMeasure7}</p>
                            </div>
                        }
                        {meal?.strIngredient7?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient7}:</p>
                                <p>{meal?.strMeasure7}</p>
                            </div>
                        }
                        {meal?.strIngredient8?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient8}:</p>
                                <p>{meal?.strMeasure8}</p>
                            </div>
                        }
                        {meal?.strIngredient9?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient9}:</p>
                                <p>{meal?.strMeasure9}</p>
                            </div>
                        }
                        {meal?.strIngredient10?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient10}:</p>
                                <p>{meal?.strMeasure10}</p>
                            </div>
                        }
                        {meal?.strIngredient11?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient11}:</p>
                                <p>{meal?.strMeasure11}</p>
                            </div>
                        }
                        {meal?.strIngredient12?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient12}:</p>
                                <p>{meal?.strMeasure12}</p>
                            </div>
                        }
                        {meal?.strIngredient13?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient13}:</p>
                                <p>{meal?.strMeasure13}</p>
                            </div>
                        }
                        {meal?.strIngredient14?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient14}:</p>
                                <p>{meal?.strMeasure14}</p>
                            </div>
                        }
                        {meal?.strIngredient15?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient15}:</p>
                                <p>{meal?.strMeasure15}</p>
                            </div>
                        }
                        {meal?.strIngredient16?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient16}:</p>
                                <p>{meal?.strMeasure16}</p>
                            </div>
                        }
                        {meal?.strIngredient17?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient17}:</p>
                                <p>{meal?.strMeasure17}</p>
                            </div>
                        }
                        {meal?.strIngredient18?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient18}:</p>
                                <p>{meal?.strMeasure18}</p>
                            </div>
                        }
                        {meal?.strIngredient19?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient19}:</p>
                                <p>{meal?.strMeasure19}</p>
                            </div>
                        }
                        {meal?.strIngredient20?.trim() &&
                            <div className="Ingredient">
                                <p>{meal?.strIngredient20}:</p>
                                <p>{meal?.strMeasure20}</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
