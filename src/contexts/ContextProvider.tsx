import { createContext, FC, ReactNode, useContext, useState } from 'react'

interface IStateContext {
    activeMenu: boolean;
    toggleMenu: () => void;
}

type StateContextProps = {
    children?: ReactNode
};

const initialState = {
    activeMenu: false,
    toggleMenu: () => console.log('Toggle Menu function not passed')
}

const StateContext = createContext<IStateContext>(initialState);

export default function ContextProvider({ children }: StateContextProps) {
    const [activeMenu, setActiveMenu] = useState(true)

    const toggleMenu = () => {
        setActiveMenu((prev) => !prev);
    };

    return <StateContext.Provider value={{ activeMenu, toggleMenu }}>{children}</ StateContext.Provider>

}

export const useStateContext = () => useContext(StateContext);