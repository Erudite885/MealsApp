import axios from 'axios'
import React, {useContext, useEffect, useState} from 'react';

const AppContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(AppContext)
}

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a";
const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

const AppProvider = ({children}) => {
    
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMeals = async (url) => {
        setIsLoading(true);
        try {
            const {data} = await axios(url);
            setMeals(data.meals)
            // const data = await res.json()
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false);
        // fetchData()
    }
    useEffect(() => {
        console.log(fetchMeals(allMealsUrl))
    }, [])

    return (
    <AppContext.Provider value={{ isLoading, meals }}>
        {children}
    </AppContext.Provider>
)}

export {AppContext, AppProvider}