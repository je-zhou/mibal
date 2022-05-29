import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import React, { ReactElement, useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { useStateContext } from '../contexts/ContextProvider'

interface NavButtonProps {
    title: string,
    customFunc: () => void,
    icon: ReactElement,
    color: string,
    dotColor: string,
}

export const NavButton = (props: NavButtonProps) => {
    return (
        <TooltipComponent content={props.title} position="BottomCenter">
            <button type='button' onClick={props.customFunc} style={{ color: props.color }} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
                <span style={{ background: props.dotColor }} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2">
                    {props.icon}
                </span>
            </button>
        </TooltipComponent>
    )
}


const Navbar = () => {
    const { activeMenu, toggleMenu } = useStateContext();

    return (
        <div className='flex justify-between p-2 md:mx-6 relative'>
            <NavButton title='Menu' customFunc={toggleMenu} color="blue" icon={<AiOutlineMenu />} dotColor="green"></NavButton>
        </div>
    )
}

export default Navbar