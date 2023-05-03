import './App.css';
import {NavBar} from './components/NavBar.tsx';
import {ToolBar} from './components/ToolBar.tsx';
import {SideBarLeft} from './components/SideBarLeft.tsx';
import {HotelList} from './components/HotelList.tsx';
import {HotelDetails} from './components/HotelDetails.tsx';
import {useState} from 'react';
import {Login} from './pages/Login.tsx';

function App() {
    const [showHotelDetails, setShowHotelDetails] = useState(false);
    const [hotel, setHotel] = useState('');

    return (
        <>
            {/*<div onClick={() => setShowHotelDetails(false)}*/}
            {/*     className={`fixed ${showHotelDetails ? '' : 'hidden'} overlay w-full h-full top-0 right-0 left-0 bottom-0 z-[10]  cursor-pointer duration-300 ease-in-out`}>*/}
            {/*</div>*/}

            {/*<header>*/}
            {/*    <NavBar/>*/}
            {/*    <ToolBar/>*/}
            {/*</header>*/}
            {/*<main>*/}
            {/*    <div className={'flex flex-row'}>*/}
            {/*        <SideBarLeft/>*/}
            {/*        <HotelList setHotel={setHotel} setShowHotelDetails={setShowHotelDetails}/>*/}
            {/*        <HotelDetails showHotelDetails={showHotelDetails} hotel={hotel}/>*/}
            {/*    </div>*/}
            {/*</main>*/}

            <Login/>
        </>
    );
}

export default App;
