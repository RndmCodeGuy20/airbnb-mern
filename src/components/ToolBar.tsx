import '../styles/ToolBar.module.css';
import {useState} from 'react';

export function ToolBar() {
    const [viewType, setViewType] = useState<'grid' | 'list'>('grid');
    const [guests, setGuests] = useState(0);

    // setSelected('grid');

    return (
        <div className={'w-full px-8 py-3 border-b border-gray'}>
            <div className={'flex flex-row justify-between'}>
                <div className={'flex flex-row bg-gray rounded-xl'}>
                    <button
                        className={`p-3 rounded-xl grid_view ${viewType === 'grid' ? 'bg-black' : 'bg-gray'} flex justify-center items-center`}
                        onClick={() => setViewType('grid')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="24" height="24"
                             viewBox="0,0,256,256">
                            <g fill={`${viewType === 'grid' ? '#fff' : '#717171'}`} fillRule="nonzero" stroke="none"
                               strokeWidth="1" strokeLinecap="butt"
                               strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                               fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                               style={{mixBlendMode: 'normal'}}>
                                <g transform="scale(10.66667,10.66667)">
                                    <path
                                        d="M5,3c-1.09306,0 -2,0.90694 -2,2v6h8v-1v-7zM13,3v8h8v-1v-5c0,-1.09306 -0.90694,-2 -2,-2zM5,5h4v4h-4zM15,5h4v4h-4zM3,13v6c0,1.09306 0.90694,2 2,2h6v-1v-7zM13,13v8h6c1.09306,0 2,-0.90694 2,-2v-6zM5,15h4v4h-4zM15,15h4v4h-4z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                    <button onClick={() => setViewType('list')}
                            className={`p-3 rounded-xl grid_view ${viewType === 'list' ? 'bg-black' : 'bg-gray'} flex justify-center items-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="24" height="24" fill={`${viewType === 'list' ? '#fff' : '#717171'}`}
                             viewBox="0 0 24 24">
                            <path
                                d="M 8.96875 2.9355469 L 3.6289062 5.0722656 C 3.2489063 5.2242656 3 5.591 3 6 L 3 20 C 3 20.707 3.7140937 21.190734 4.3710938 20.927734 L 9.03125 19.064453 L 15.03125 21.064453 L 20.371094 18.927734 C 20.751094 18.775734 21 18.409 21 18 L 21 4 C 21 3.293 20.285906 2.8092656 19.628906 3.0722656 L 14.96875 4.9355469 L 8.96875 2.9355469 z M 10 5.3867188 L 14 6.7207031 L 14 18.613281 L 10 17.279297 L 10 5.3867188 z M 8 5.4765625 L 8 17.322266 L 5 18.523438 L 5 6.6777344 L 8 5.4765625 z M 19 5.4765625 L 19 17.322266 L 16 18.523438 L 16 6.6777344 L 19 5.4765625 z"></path>
                        </svg>
                    </button>
                </div>
                <div className={'tools_container flex flex-row gap-2'}>
                    <div
                        className={'p-3 px-5 rounded-lg grid_view bg-gray flex flex-row justify-between items-center w-60'}>
                        <p className={'text-dark_gray'}>Anywhere</p>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="18" height="18"
                             viewBox="0,0,256,256">
                            <g fill="#717171" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                               strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                               fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                               style={{mixBlendMode: 'normal'}}>
                                <g transform="scale(5.33333,5.33333)">
                                    <path
                                        d="M20.5,6c-7.99037,0 -14.5,6.50964 -14.5,14.5c0,7.99036 6.50963,14.5 14.5,14.5c3.45636,0 6.63371,-1.22096 9.12891,-3.25l9.81055,9.81055c0.37623,0.39185 0.9349,0.54969 1.46055,0.41265c0.52565,-0.13704 0.93616,-0.54754 1.07319,-1.07319c0.13704,-0.52565 -0.0208,-1.08432 -0.41265,-1.46055l-9.81055,-9.81055c2.02904,-2.4952 3.25,-5.67255 3.25,-9.12891c0,-7.99036 -6.50963,-14.5 -14.5,-14.5zM20.5,9c6.36905,0 11.5,5.13096 11.5,11.5c0,3.10261 -1.2238,5.90572 -3.20898,7.9707c-0.12237,0.08994 -0.23037,0.19794 -0.32031,0.32031c-2.06499,1.98518 -4.86809,3.20898 -7.9707,3.20898c-6.36905,0 -11.5,-5.13096 -11.5,-11.5c0,-6.36904 5.13095,-11.5 11.5,-11.5z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div
                        className={'p-3 px-5 gap-2 rounded-lg grid_view bg-gray flex flex-row justify-between items-center w-auto'}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="18" height="18"
                             viewBox="0,0,256,256">
                            <g fill="#717171" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt"
                               strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"
                               fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none"
                               style={{mixBlendMode: 'normal'}}>
                                <g transform="scale(10.66667,10.66667)">
                                    <path
                                        d="M6,1v2h-1c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2v-14c0,-1.1 -0.9,-2 -2,-2h-1v-2h-2v2h-8v-2zM5,5h1h2h8h2h1v2h-14zM5,9h14v10h-14z"></path>
                                </g>
                            </g>
                        </svg>
                        <p className={'text-dark_gray'}>June 21 - June 24</p>
                    </div>
                    <div
                        className={'p-3 px-5 gap-3 rounded-lg grid_view bg-gray flex flex-row justify-between items-center w-auto'}>
                        <button className={'p-2 bg-white rounded-md'} onClick={() => setGuests((prevState) => {
                            if (prevState <= 0) {
                                return 0;
                            }
                            return prevState - 1;
                        })}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="12" height="12"
                                 fill={'#E63454'}
                                 fontWeight={'bold'}
                                 viewBox="0 0 24 24">
                                <path
                                    d="M3,12L3,12c0-0.552,0.448-1,1-1h16c0.552,0,1,0.448,1,1v0c0,0.552-0.448,1-1,1H4C3.448,13,3,12.552,3,12z"></path>
                            </svg>
                        </button>
                        <p className={'text-dark_gray'}>{guests} Guests</p>
                        <button className={'p-2 bg-white rounded-md'} onClick={() => setGuests((prevState) => {
                            return prevState + 1;
                        })}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="12" height="12"
                                 fill={'#E63454'}
                                 fontWeight={'bold'}
                                 viewBox="0 0 24 24">
                                <path fillRule="evenodd"
                                      d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={'tools_container flex justify-center items-center'}>
                    <div className={'p-3 rounded-md grid_view bg-gray'}>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                             width="24" height="24"
                             fill={'#717171'}
                             viewBox="0 0 48 48">
                            <path
                                d="M18.5 40c-.216 0-.434-.047-.636-.142C17.337 39.611 17 39.082 17 38.5V27.152l-9.398-8.757C5.968 17.014 5 14.927 5 12.717V9.5C5 8.121 6.121 7 7.5 7h28C36.879 7 38 8.121 38 9.5v3.046c0 2.312-1.095 4.535-2.928 5.944L26 26.194V33.5c0 .445-.197.867-.54 1.152l-6 5C19.186 39.882 18.845 40 18.5 40zM8 10v2.717c0 1.326.581 2.579 1.594 3.437l9.929 9.249C19.827 25.687 20 26.084 20 26.5v8.798l3-2.5V25.5c0-.44.193-.858.529-1.144l9.658-8.198C34.344 15.267 35 13.934 35 12.546V10H8zM35.5 10h.01H35.5zM39.5 43h-14c-.606 0-1.153-.365-1.386-.926s-.104-1.206.325-1.635l7-7c.586-.586 1.535-.586 2.121 0l7 7c.429.429.558 1.074.325 1.635S40.106 43 39.5 43zM29.121 40h6.758L32.5 36.621 29.121 40z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
