import { createContext, useContext, useState } from 'react'


const initialState = {
    activeMenu: false
    setActiveMenu: 
}

const StateContext = createContext(initialState);


export const ContextProvider = (children: any) => {
    const [activeMenu, setActiveMenu] = useState(true)

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu }}>
            {children}
        </ StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);