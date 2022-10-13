import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react';

const AppContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(AppContext)
}

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
    
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const fetchMeals = async (url) => {
        setIsLoading(true);
        try {
            const { data } = await axios(url);
            if (data.meals) {
                setMeals(data.meals)
            } else {
                setMeals([])
            }
            // const data = await res.json()
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
        // fetchData()
    }

    useEffect(() => {
        fetchMeals(allMealsUrl)
    }, [])


    useEffect(() => {
        if (!searchTerm) return
       console.log(fetchMeals(`${allMealsUrl}${searchTerm}`));
    }, [searchTerm])

    const fetchRandomMeal = () => {
        console.log(fetchMeals(randomMealUrl));
    }

    return (
    <AppContext.Provider value={{ fetchRandomMeal, setSearchTerm, isLoading, meals }}>
        {children}
    </AppContext.Provider>
)}

export {AppContext, AppProvider}