import '../styles/HotelList.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

type Hotel = {
    id: number,
    name: string,
    address: {
        street: string,
        city: string,
        state: string,
    },
    price_per_night: number,
    stars: number,
    // map(element: (value, index) => JSX.Element): any;
}

export function HotelList({setHotel, setShowHotelDetails}: { setHotel: any, setShowHotelDetails: any }) {

    const [hotelList, setHotelList] = useState<Hotel>([]);
    const handleClick = (id: string) => {
        console.log(id);
        setHotel(id);
        setShowHotelDetails(true);
        // axios.get(`http://localhost:5000/api/v1.0/hotels/${id}`)
        //     .then((response) => {
        //         console.log(response.data.data);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });


    };

    useEffect(() => {
        axios.get('http://localhost:5000/api/v1.0/hotels/list')
            .then((response) => {
                const res: Hotel = response.data.data;
                setHotelList(res);
                // console.log(res);
            });
    }, []);


    return (
        <div className="grid grid-cols-4 grid-flow-row gap-4 m-10 w-full">
            {hotelList.map((value, index) => (
                <Link key={index} to={'#'} onClick={() => {
                    handleClick(value._id);
                }}>
                    <div
                        className="max-w-xl w-full bg-white h-max rounded-2xl hover:drop-shadow-md duration-200 border border-gray">

                        <img className="rounded-t-2xl h-56 w-full object-cover"
                             src="https://images.unsplash.com/photo-1601918774946-25832a4be0d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                             alt=""/>

                        <div className="p-5">
                            <a href="#">
                                <h1 className="mb-1 text-lg font-medium text-primary">{value.name}</h1>
                            </a>
                            <p className="mb-3 font-normal text-dark_gray">{value.address.street}, {value.address.city}, {value.address.state}</p>
                            <div className="flex flex-row justify-between">
                                <div className={'flex flex-row items-baseline'}>
                                    ${value.price_per_night}
                                    <span
                                        className={'text-dark_gray font-semibold text-sm ml-1'}>/night</span>
                                </div>
                                <div className={'flex flex-row items-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="18" height="18"
                                         fill={'text-primary'}
                                         viewBox="0 0 50 50">
                                        <path
                                            d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                                    </svg>
                                    <span className={'text-dark_gray ml-1'}>{value.stars}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>))}
        </div>
    );
}
