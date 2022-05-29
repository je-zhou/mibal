import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { AiOutlineClose } from 'react-icons/ai'
import { BiCog } from 'react-icons/bi'
import { BsCashStack, BsFillFileSpreadsheetFill, BsFillDoorOpenFill } from 'react-icons/bs'
import LinkMenu from '../types/link.type';
import { useStateContext } from '../contexts/ContextProvider';


const SideBar = () => {
    const { activeMenu, toggleMenu } = useStateContext()

    const links: LinkMenu[] = [{
        title: 'Finances',
        links: [{ name: 'Balance Sheet', path: '/balance-sheet', icon: <BsFillFileSpreadsheetFill /> },
        { name: 'Cash Flow', path: '/cash-flow', icon: <BsCashStack /> },]
    },
    {
        title: 'Account',
        links: [{ name: 'Settings', path: '/settings', icon: <BiCog /> },
        { name: 'Log Out', path: '/login', icon: <BsFillDoorOpenFill /> },]
    },
    ]

    const handleCloseSideBar = () => {
        if (activeMenu !== undefined) {
            toggleMenu!()
        }
    };


    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
    const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';



    return (
        <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
            {activeMenu && (
                <>
                    <div className='flex justify-between items-center'>
                        <Link to="/" onClick={toggleMenu} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold traacking-tight dark:text-white text-slate-900" >
                            <span>Mibal</span>
                        </Link>
                        <TooltipComponent content="Menu" position='BottomCenter'>
                            <button type="button" onClick={toggleMenu} className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">
                                <AiOutlineClose />
                            </button>
                        </TooltipComponent>
                    </div>
                    <div className="mt-10 ">
                        {links.map((item) => (
                            <div key={item.title}>
                                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                                    {item.title}
                                </p>
                                {item.links.map((link) => (
                                    <NavLink
                                        to={link.path}
                                        key={link.name}
                                        onClick={handleCloseSideBar}
                                        style={({ isActive }) => ({
                                            backgroundColor: isActive ? '' : '',
                                        })}
                                        className={({ isActive }) => (isActive ? activeLink : normalLink)}
                                    >
                                        {link.icon}
                                        <span className="capitalize ">{link.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>);
};

export default SideBar