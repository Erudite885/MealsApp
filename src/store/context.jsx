import React, {useContext} from 'react';

const AppContext = React.createContext()

export const useGlobalContext = () => {
    return useContext(AppContext)
}

const AppProvider = ({children}) => (
    <AppContext.Provider value={'hello'}>
        {children}
    </AppContext.Provider>
)

export {AppContext, AppProvider}