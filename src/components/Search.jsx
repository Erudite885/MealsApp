import React, { useState } from "react";
import { useGlobalContext } from "../store/context";

import classes from "./search.module.css";

const Search = () => {

    const { setSearchTerm, fetchRandomMeal } = useGlobalContext()
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        console.log(text)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text){
            setSearchTerm(text);
        }
    };
    
    const handleRandomMeal = () => {
        setSearchTerm('');
        setText('');
        fetchRandomMeal();
    }

    return (
        <header className={classes.searchContainer}>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder='search favorite meals' 
                    className={classes.formInput}
                    onChange={handleChange} 
                    value={text}
                />
                <button 
                    type='submit' 
                    className={classes.btn}
                >
                        Search
                </button>
                <button 
                    type='button' 
                    className={classes.btnHipster}
                    onClick={handleRandomMeal}
                >
                    Random Suggestion
                </button>
            </form>
        </header>
    )
};

export default Search;
