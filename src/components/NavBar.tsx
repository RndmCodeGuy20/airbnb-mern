import '../styles/NavBar.module.css';
import {useState} from 'react';
import {Link} from 'react-router-dom';

export function NavBar({setIsAuthenticated}) {

    const [userMenu, setUserMenu] = useState(false);
    return (
        <nav className="bg-white border-gray px-8 py-4 width-auto border-b">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto ">
                <Link to="/hotels" className="flex items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239"
                        alt={'logo'} width={102} height={32}/>
                </Link>
                <div className="inline-flex rounded-full bg-gray order-2" onMouseEnter={() => {
                    setUserMenu(true);
                }}
                     onMouseLeave={() => {
                         setUserMenu(false);
                     }}>
                    <div
                        className={'p-6 w-full h-full cursor-pointer hover:bg-highlight duration-300 ease-in-out overflow-hidden rounded-full'}
                        onClick={() => {
                            setUserMenu(!userMenu);
                        }}
                    ></div>
                    <div className="relative">
                        <div
                            className={`${userMenu ? 'absolute' : 'hidden'} right-0 z-10 w-44 mt-12 origin-top-right bg-white rounded-md shadow-lg duration-300 ease-in-out`}>
                            <div className="p-2">
                                <Link
                                    to="/user"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray duration-300 ease-in-out"
                                >
                                    Profile
                                </Link>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray duration-300 ease-in-out"
                                >
                                    Settings
                                </a>
                                <Link
                                    to={'/login'}
                                    className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray duration-300 ease-in-out"
                                    onClick={() => {
                                        localStorage.removeItem('token');
                                        localStorage.removeItem('userDetails');
                                        setIsAuthenticated(false);
                                    }}
                                >
                                    Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2">
                    <ul className="flex flex-col font-primary p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#"
                               className="block py-2 font-sans pl-3 pr-4 text-primary font-semibold hover:text-primary md:bg-transparent md:text-primary md:p-0 border-b-2 border-highlight pb-4"
                               aria-current="page">Stays</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-secondary rounded hover:text-primary md:hover:bg-transparent md:hover:text-primary md:p-0">Experiences</a>
                        </li>
                        <li>
                            <a href="#"
                               className="block py-2 pl-3 pr-4 text-secondary rounded hover:text-primary md:hover:bg-transparent md:hover:text-primary md:p-0">Online
                                Experiences</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
