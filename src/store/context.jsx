import React, {useContext, useEffect} from 'react';

const AppContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({children}) => {
    useEffect(() => {
        console.log('fetch data here')
    }, [])

    return (
    <AppContext.Provider value={'hello'}>
        {children}
    </AppContext.Provider>
)}

export {AppContext, AppProvider}