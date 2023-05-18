import './App.css';
import {BrowserRouter as Router, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import {useState} from 'react';
import {Login} from './pages/Login.tsx';
import {HotelList} from './components/HotelList.tsx';
import {NavBar} from './components/NavBar.tsx';
import {ToolBar} from './components/ToolBar.tsx';
import {SideBarLeft} from './components/SideBarLeft.tsx';
import {HotelDetails} from './components/HotelDetails.tsx';
import {UserPage} from './pages/User.tsx';

function App() {
    const [showHotelDetails, setShowHotelDetails] = useState(false);
    const [hotelId, setHotelId] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState('');
    // console.log(userId);
    const PrivateRoutes = () => {
        const token = localStorage.getItem('token');
        return (
            (isAuthenticated || token) ? <Outlet/> : <Navigate to='/login'/>
        );
    };

    // const PublicRoutes = () => {
    //     // const token = localStorage.getItem('token');
    //     return (
    //         // (isAuthenticated || token) ? <Navigate to='/hotels'/> : <Navigate to='/login'/>
    //         <Navigate to={'/login'}/>
    //     );
    // };

    const HotelListPage = () => {
        return (
            <>
                <div onClick={() => setShowHotelDetails(false)}
                     className={`fixed ${showHotelDetails ? '' : 'hidden'} overlay w-full h-full top-0 right-0 left-0 bottom-0 z-[10]  cursor-pointer duration-300 ease-in-out`}>
                </div>

                <header>
                    <NavBar setIsAuthenticated={setIsAuthenticated}/>
                    <ToolBar/>
                </header>
                <main>
                    <div className={'flex flex-row'}>
                        <SideBarLeft/>
                        <HotelList setHotel={setHotelId} setShowHotelDetails={setShowHotelDetails}/>
                        <HotelDetails showHotelDetails={showHotelDetails} hotelId={hotelId}/>
                    </div>
                </main>
            </>);
    };

    return (
        <>
            <Router>
                <Routes>
                    {/*<Route element={<PublicRoutes/>}>*/}
                    <Route element={<Login setIsAuthenticated={setIsAuthenticated} setUserId={setUserId}/>} path="/"/>
                    <Route element={<Login setIsAuthenticated={setIsAuthenticated} setUserId={setUserId}/>}
                           path="/login"/>
                    {/*</Route>*/}
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<HotelListPage/>}
                               path={'/hotels'}/>
                    </Route>
                    <Route element={<PrivateRoutes/>}>
                        <Route element={<UserPage userId={userId}/>}
                               path={'/user'}/>
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
