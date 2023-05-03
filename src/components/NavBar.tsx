import '../styles/NavBar.module.css';

export function NavBar() {
    return (
        <nav className="bg-white border-gray px-8 py-4 width-auto border-b">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto ">
                <a href="#" className="flex items-center">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239"
                        alt={'logo'} width={102} height={32}/>
                </a>
                <div className="flex items-center md:order-2">
                    <button type="button"
                            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0"
                            id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown"
                            data-dropdown-placement="bottom">
                        <img className="w-10 h-10 rounded-full" src=""
                             alt="user photo"/>
                    </button>
                    <div
                        className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="user-dropdown">
                        <div className="px-4 py-3">
                            <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                            <span
                                className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                    out</a>
                            </li>
                        </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
                            aria-controls="mobile-menu-2" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none"
                             stroke="var(--token-e4ad3d66-c16d-4d5d-9bac-de130e5b6f67, rgb(113, 113, 113)) /* {&quot;name&quot;:&quot;Black-75&quot;} */"
                             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             style={{'width': 32, 'height': 32}}>
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
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
