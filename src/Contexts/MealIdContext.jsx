import React, { createContext, useState } from 'react'

export const mealContext = createContext();
export default function MealContextProvider({ children }) {
    const [mealId, setMealId] = useState("")
    return (
        <mealContext.Provider value={{ mealId, setMealId }}>
            {children}
        </mealContext.Provider>
    )
}
