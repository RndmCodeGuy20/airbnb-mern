import '../styles/HotelDetails.module.css';
import {useEffect, useState} from 'react';
import axios from 'axios';

type Props = {
    data: {
        name: string,
        address: string,
        city: string,
        country: string,
        price_per_night: number,
        photo: string[],
        liked: boolean,
        star_rating: number,
        tag: string,
        description: {
            number_of_rooms: number,
            beds: number,
            number_of_guests: number,
            number_of_beds: number,
        },
        amenities: {
            wifi: boolean,
            pool: boolean,
            balcony: boolean,
            kitchen: boolean,
            air_conditioning: boolean,
            parking: boolean,
            TV: {
                kind: string,
                number_of_channels: number,
            }
        },
        reviews: {
            number_of_reviews: number,
            standards: {
                cleanliness: number,
                comfort: number,
                location: number,
                facilities: number,
                communication: number,
                value_for_money: number,
            }
        },
        comments: {
            name: string,
            date: string,
            comment: string,
        }[],
        location: {
            lat: number,
            long: number,
        }
    }
}

const hotel: Props = {
    data: {
        name: 'Luxury Hotel',
        address: '123 Main Street',
        city: 'New York',
        country: 'USA',
        price_per_night: 250,
        photo: [
            'https://example.com/hotel-photo1.jpg',
            'https://example.com/hotel-photo2.jpg',
            'https://example.com/hotel-photo3.jpg',
        ],
        liked: true,
        star_rating: 4.5,
        tag: 'Luxury',
        description: {
            number_of_rooms: 100,
            beds: 200,
            number_of_guests: 400,
            number_of_beds: 300,
        },
        amenities: {
            wifi: true,
            pool: true,
            balcony: false,
            kitchen: true,
            air_conditioning: true,
            parking: false,
            TV: {
                kind: 'Flat-screen',
                number_of_channels: 100,
            },
        },
        reviews: {
            number_of_reviews: 500,
            standards: {
                cleanliness: 4.8,
                comfort: 4.7,
                location: 4.9,
                facilities: 4.6,
                communication: 4.8,
                value_for_money: 4.5,
            },
        },
        comments: [
            {
                name: 'John',
                date: '2022-04-28',
                comment: 'This is an amazing hotel with great amenities and excellent service.',
            },
            {
                name: 'Jane',
                date: '2022-04-27',
                comment: 'I had a wonderful stay at this hotel. The staff was friendly and accommodating, and the rooms were clean and comfortable.',
            },
        ],
        location: {
            lat: 40.712776,
            long: -74.005974,
        },
    },
};


export function HotelDetails({showHotelDetails, hotelId}) {

    const [hotelData, setHotelData] = useState({
        '_id': '64526ff8915de2451105be0d',
        'name': 'Hotel California',
        'address': {
            'street': '1234 Main St',
            'city': 'Santa Monica',
            'state': 'CA',
            'zip': '90401',
            '_id': '64646870c93f1d714c3b61a9',
        },
        'price_per_night': 399.99,
        'description': {
            'num_of_rooms': 1,
            'num_of_guests': 2,
            'num_of_beds': 1,
            '_id': '64646870c93f1d714c3b61aa',
        },
    });

    // console.log(showHotelDetails);
    useEffect(() => {
        return () => {
            console.log('inside details', hotelId);
            if (hotelId) {
                axios.get(`http://localhost:5000/api/v1.0/hotels/${hotelId}`)
                    .then((response) => {
                        setHotelData(response.data.data);

                        console.log(hotelData.price_per_night);

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        };
    }, []);


    return (
        <div
            className={`fixed ${showHotelDetails ? '' : 'hidden'} top-0 right-0 w-[75vw] overflow-y-scroll bg-white py-8 px-10 text-black h-screen z-10 details_container mb-10 duration-300`}>
            {/*<div*/}
            {/*    className={'close_button mb-10 rounded-full bg-white p-3 w-max grid place-content-center drop-shadow-md cursor-pointer'}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"*/}
            {/*         width="18" height="18"*/}
            {/*         viewBox="0 0 30 30">*/}
            {/*        <path*/}
            {/*            d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>*/}
            {/*    </svg>*/}
            {/*</div>*/}
            <div className={'page_container flex flex-col w-full h-full'}>
                <div className={'hotel_image_gallery flex flex-row gap-4 h-100'}>
                    <div className={'image_container w-3/5 h-[480px] bg-gray rounded-2xl relative'}>
                        <div
                            className={'absolute left-5 bottom-5 bg-white rounded-xl p-2 cursor-pointer font-light hover:text-highlight duration-200 ease-in-out'}>View
                            All
                            Photos
                        </div>
                    </div>
                    <div className={'image_container_right w-2/5 h-full flex flex-col gap-4'}>
                        <div className={'image_container w-full h-1/2 bg-gray rounded-2xl'}></div>
                        <div className={'image_container w-full h-1/2 bg-gray rounded-2xl'}></div>
                    </div>
                </div>
                <div
                    className="tag flex flex-row items-center justify-center w-max my-5 gap-4 border border-gray rounded-xl p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                         width="32" height="32"
                         viewBox="0 0 48 48">
                        <linearGradient id="q0c2dLEp_4LHk~8cW2fATa_8ggStxqyboK5_gr1" x1="9.009" x2="38.092"
                                        y1="6.36" y2="45.266" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stopColor="#ffda1c"></stop>
                            <stop offset="1" stopColor="#feb705"></stop>
                        </linearGradient>
                        <path fill="url(#q0c2dLEp_4LHk~8cW2fATa_8ggStxqyboK5_gr1)"
                              d="M24.913,5.186l5.478,12.288l13.378,1.413c0.861,0.091,1.207,1.158,0.564,1.737l-9.993,9.005	l2.791,13.161c0.18,0.847-0.728,1.506-1.478,1.074L24,37.141l-11.653,6.722c-0.75,0.432-1.657-0.227-1.478-1.074l2.791-13.161	l-9.993-9.005c-0.643-0.579-0.296-1.646,0.564-1.737l13.378-1.413l5.478-12.288C23.439,4.395,24.561,4.395,24.913,5.186z"></path>
                    </svg>
                    <span className={'font-semibold'}>{hotel.data.tag}</span>
                </div>
                <div className={'hotel_details_container flex flex-row gap-4 relative justify-between'}>
                    <div className={'hotel_details_info w-2/3 flex flex-col gap-4 mb-10'}>
                        <div className={'hotel_details_name_container flex flex-row justify-between'}>
                            <div className={'hotel_details_name flex flex-col gap-2'}>
                                <div className={'text-2xl'}>{hotelData.name}</div>
                                <div
                                    className={'text-lg font-light text-dark_gray'}>{hotelData.address.street}, {hotelData.address.city}, {hotelData.address.state} - {hotelData.address.zip}</div>
                            </div>
                            <div className={'hotel_details_name flex flex-row gap-2 text-2xl'}>
                                <div className={'p-2 bg-gray rounded-full h-max w-max'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M 18 2 C 16.35499 2 15 3.3549904 15 5 C 15 5.1909529 15.021791 5.3771224 15.056641 5.5585938 L 7.921875 9.7207031 C 7.3985399 9.2778539 6.7320771 9 6 9 C 4.3549904 9 3 10.35499 3 12 C 3 13.64501 4.3549904 15 6 15 C 6.7320771 15 7.3985399 14.722146 7.921875 14.279297 L 15.056641 18.439453 C 15.021555 18.621514 15 18.808386 15 19 C 15 20.64501 16.35499 22 18 22 C 19.64501 22 21 20.64501 21 19 C 21 17.35499 19.64501 16 18 16 C 17.26748 16 16.601593 16.279328 16.078125 16.722656 L 8.9433594 12.558594 C 8.9782095 12.377122 9 12.190953 9 12 C 9 11.809047 8.9782095 11.622878 8.9433594 11.441406 L 16.078125 7.2792969 C 16.60146 7.7221461 17.267923 8 18 8 C 19.64501 8 21 6.6450096 21 5 C 21 3.3549904 19.64501 2 18 2 z M 18 4 C 18.564129 4 19 4.4358706 19 5 C 19 5.5641294 18.564129 6 18 6 C 17.435871 6 17 5.5641294 17 5 C 17 4.4358706 17.435871 4 18 4 z M 6 11 C 6.5641294 11 7 11.435871 7 12 C 7 12.564129 6.5641294 13 6 13 C 5.4358706 13 5 12.564129 5 12 C 5 11.435871 5.4358706 11 6 11 z M 18 18 C 18.564129 18 19 18.435871 19 19 C 19 19.564129 18.564129 20 18 20 C 17.435871 20 17 19.564129 17 19 C 17 18.435871 17.435871 18 18 18 z"></path>
                                    </svg>
                                </div>
                                <div className={'p-2 bg-gray rounded-full h-max w-max'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M16.5,3C13.605,3,12,5.09,12,5.09S10.395,3,7.5,3C4.462,3,2,5.462,2,8.5c0,4.171,4.912,8.213,6.281,9.49 C9.858,19.46,12,21.35,12,21.35s2.142-1.89,3.719-3.36C17.088,16.713,22,12.671,22,8.5C22,5.462,19.538,3,16.5,3z M14.811,16.11 c-0.177,0.16-0.331,0.299-0.456,0.416c-0.751,0.7-1.639,1.503-2.355,2.145c-0.716-0.642-1.605-1.446-2.355-2.145 c-0.126-0.117-0.28-0.257-0.456-0.416C7.769,14.827,4,11.419,4,8.5C4,6.57,5.57,5,7.5,5c1.827,0,2.886,1.275,2.914,1.308L12,8 l1.586-1.692C13.596,6.295,14.673,5,16.5,5C18.43,5,20,6.57,20,8.5C20,11.419,16.231,14.827,14.811,16.11z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className={'hotel_details_count_container flex flex-row gap-5 my-4'}>
                            <div className={'hotel_details_count flex flex-row gap-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="24" height="24"
                                     viewBox="0 0 48 48">
                                    <path
                                        d="M 21.5 3 C 19.032499 3 17 5.0324991 17 7.5 L 17 9 L 13.5 9 C 10.480226 9 8 11.480226 8 14.5 L 8 37.5 C 8 40.519774 10.480226 43 13.5 43 L 18.5 43 L 36.5 43 C 38.967501 43 41 40.967501 41 38.5 L 41 29.5 C 41 27.954719 40.2019 26.581237 39 25.769531 L 39 14.5 C 39 11.480226 36.519774 9 33.5 9 L 30 9 L 30 7.5 C 30 5.0324991 27.967501 3 25.5 3 L 21.5 3 z M 21.5 6 L 25.5 6 C 26.346499 6 27 6.6535009 27 7.5 L 27 9 L 20 9 L 20 7.5 C 20 6.6535009 20.653501 6 21.5 6 z M 13.5 12 L 18.253906 12 A 1.50015 1.50015 0 0 0 18.740234 12 L 28.253906 12 A 1.50015 1.50015 0 0 0 28.740234 12 L 33.5 12 C 34.898226 12 36 13.101774 36 14.5 L 36 25 L 33 25 L 33 23.5 C 33 21.032499 30.967501 19 28.5 19 L 26.5 19 C 24.032499 19 22 21.032499 22 23.5 L 22 25 L 18.5 25 C 16.032499 25 14 27.032499 14 29.5 L 14 38.5 C 14 39.027452 14.109157 39.527904 14.279297 40 L 13.5 40 C 12.101774 40 11 38.898226 11 37.5 L 11 14.5 C 11 13.101774 12.101774 12 13.5 12 z M 26.5 22 L 28.5 22 C 29.346499 22 30 22.653501 30 23.5 L 30 25 L 25 25 L 25 23.5 C 25 22.653501 25.653501 22 26.5 22 z M 18.5 28 L 23.253906 28 A 1.50015 1.50015 0 0 0 23.740234 28 L 31.253906 28 A 1.50015 1.50015 0 0 0 31.740234 28 L 36.5 28 C 37.346499 28 38 28.653501 38 29.5 L 38 38.5 C 38 39.346499 37.346499 40 36.5 40 L 18.5 40 C 17.653501 40 17 39.346499 17 38.5 L 17 29.5 C 17 28.653501 17.653501 28 18.5 28 z"></path>
                                </svg>
                                <span
                                    className={'text-md font-light'}>{hotel.data.description.number_of_guests}+ Guests</span>
                            </div>
                            <div className={'hotel_details_count flex flex-row gap-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="24" height="24"
                                     viewBox="0 0 48 48">
                                    <path
                                        d="M 21.5 3 C 19.032499 3 17 5.0324991 17 7.5 L 17 9 L 13.5 9 C 10.480226 9 8 11.480226 8 14.5 L 8 37.5 C 8 40.519774 10.480226 43 13.5 43 L 18.5 43 L 36.5 43 C 38.967501 43 41 40.967501 41 38.5 L 41 29.5 C 41 27.954719 40.2019 26.581237 39 25.769531 L 39 14.5 C 39 11.480226 36.519774 9 33.5 9 L 30 9 L 30 7.5 C 30 5.0324991 27.967501 3 25.5 3 L 21.5 3 z M 21.5 6 L 25.5 6 C 26.346499 6 27 6.6535009 27 7.5 L 27 9 L 20 9 L 20 7.5 C 20 6.6535009 20.653501 6 21.5 6 z M 13.5 12 L 18.253906 12 A 1.50015 1.50015 0 0 0 18.740234 12 L 28.253906 12 A 1.50015 1.50015 0 0 0 28.740234 12 L 33.5 12 C 34.898226 12 36 13.101774 36 14.5 L 36 25 L 33 25 L 33 23.5 C 33 21.032499 30.967501 19 28.5 19 L 26.5 19 C 24.032499 19 22 21.032499 22 23.5 L 22 25 L 18.5 25 C 16.032499 25 14 27.032499 14 29.5 L 14 38.5 C 14 39.027452 14.109157 39.527904 14.279297 40 L 13.5 40 C 12.101774 40 11 38.898226 11 37.5 L 11 14.5 C 11 13.101774 12.101774 12 13.5 12 z M 26.5 22 L 28.5 22 C 29.346499 22 30 22.653501 30 23.5 L 30 25 L 25 25 L 25 23.5 C 25 22.653501 25.653501 22 26.5 22 z M 18.5 28 L 23.253906 28 A 1.50015 1.50015 0 0 0 23.740234 28 L 31.253906 28 A 1.50015 1.50015 0 0 0 31.740234 28 L 36.5 28 C 37.346499 28 38 28.653501 38 29.5 L 38 38.5 C 38 39.346499 37.346499 40 36.5 40 L 18.5 40 C 17.653501 40 17 39.346499 17 38.5 L 17 29.5 C 17 28.653501 17.653501 28 18.5 28 z"></path>
                                </svg>
                                <span
                                    className={'text-md font-light'}>{hotel.data.description.number_of_guests}+ Guests</span>
                            </div>
                            <div className={'hotel_details_count flex flex-row gap-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="24" height="24"
                                     viewBox="0 0 48 48">
                                    <path
                                        d="M 21.5 3 C 19.032499 3 17 5.0324991 17 7.5 L 17 9 L 13.5 9 C 10.480226 9 8 11.480226 8 14.5 L 8 37.5 C 8 40.519774 10.480226 43 13.5 43 L 18.5 43 L 36.5 43 C 38.967501 43 41 40.967501 41 38.5 L 41 29.5 C 41 27.954719 40.2019 26.581237 39 25.769531 L 39 14.5 C 39 11.480226 36.519774 9 33.5 9 L 30 9 L 30 7.5 C 30 5.0324991 27.967501 3 25.5 3 L 21.5 3 z M 21.5 6 L 25.5 6 C 26.346499 6 27 6.6535009 27 7.5 L 27 9 L 20 9 L 20 7.5 C 20 6.6535009 20.653501 6 21.5 6 z M 13.5 12 L 18.253906 12 A 1.50015 1.50015 0 0 0 18.740234 12 L 28.253906 12 A 1.50015 1.50015 0 0 0 28.740234 12 L 33.5 12 C 34.898226 12 36 13.101774 36 14.5 L 36 25 L 33 25 L 33 23.5 C 33 21.032499 30.967501 19 28.5 19 L 26.5 19 C 24.032499 19 22 21.032499 22 23.5 L 22 25 L 18.5 25 C 16.032499 25 14 27.032499 14 29.5 L 14 38.5 C 14 39.027452 14.109157 39.527904 14.279297 40 L 13.5 40 C 12.101774 40 11 38.898226 11 37.5 L 11 14.5 C 11 13.101774 12.101774 12 13.5 12 z M 26.5 22 L 28.5 22 C 29.346499 22 30 22.653501 30 23.5 L 30 25 L 25 25 L 25 23.5 C 25 22.653501 25.653501 22 26.5 22 z M 18.5 28 L 23.253906 28 A 1.50015 1.50015 0 0 0 23.740234 28 L 31.253906 28 A 1.50015 1.50015 0 0 0 31.740234 28 L 36.5 28 C 37.346499 28 38 28.653501 38 29.5 L 38 38.5 C 38 39.346499 37.346499 40 36.5 40 L 18.5 40 C 17.653501 40 17 39.346499 17 38.5 L 17 29.5 C 17 28.653501 17.653501 28 18.5 28 z"></path>
                                </svg>
                                <span
                                    className={'text-md font-light'}>{hotel.data.description.number_of_guests}+ Guests</span>
                            </div>
                            <div className={'hotel_details_count flex flex-row gap-2'}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                     width="24" height="24"
                                     viewBox="0 0 48 48">
                                    <path
                                        d="M 21.5 3 C 19.032499 3 17 5.0324991 17 7.5 L 17 9 L 13.5 9 C 10.480226 9 8 11.480226 8 14.5 L 8 37.5 C 8 40.519774 10.480226 43 13.5 43 L 18.5 43 L 36.5 43 C 38.967501 43 41 40.967501 41 38.5 L 41 29.5 C 41 27.954719 40.2019 26.581237 39 25.769531 L 39 14.5 C 39 11.480226 36.519774 9 33.5 9 L 30 9 L 30 7.5 C 30 5.0324991 27.967501 3 25.5 3 L 21.5 3 z M 21.5 6 L 25.5 6 C 26.346499 6 27 6.6535009 27 7.5 L 27 9 L 20 9 L 20 7.5 C 20 6.6535009 20.653501 6 21.5 6 z M 13.5 12 L 18.253906 12 A 1.50015 1.50015 0 0 0 18.740234 12 L 28.253906 12 A 1.50015 1.50015 0 0 0 28.740234 12 L 33.5 12 C 34.898226 12 36 13.101774 36 14.5 L 36 25 L 33 25 L 33 23.5 C 33 21.032499 30.967501 19 28.5 19 L 26.5 19 C 24.032499 19 22 21.032499 22 23.5 L 22 25 L 18.5 25 C 16.032499 25 14 27.032499 14 29.5 L 14 38.5 C 14 39.027452 14.109157 39.527904 14.279297 40 L 13.5 40 C 12.101774 40 11 38.898226 11 37.5 L 11 14.5 C 11 13.101774 12.101774 12 13.5 12 z M 26.5 22 L 28.5 22 C 29.346499 22 30 22.653501 30 23.5 L 30 25 L 25 25 L 25 23.5 C 25 22.653501 25.653501 22 26.5 22 z M 18.5 28 L 23.253906 28 A 1.50015 1.50015 0 0 0 23.740234 28 L 31.253906 28 A 1.50015 1.50015 0 0 0 31.740234 28 L 36.5 28 C 37.346499 28 38 28.653501 38 29.5 L 38 38.5 C 38 39.346499 37.346499 40 36.5 40 L 18.5 40 C 17.653501 40 17 39.346499 17 38.5 L 17 29.5 C 17 28.653501 17.653501 28 18.5 28 z"></path>
                                </svg>
                                <span
                                    className={'text-md font-light'}>{hotel.data.description.number_of_guests}+ Guests</span>
                            </div>
                        </div>
                        <hr className={'rounded-2xl bg-gray border-gray'}/>
                        <div className={'hotel_details_small_amenities flex flex-row gap-4 my-10'}>
                            {Array.from([1, 2, 3]).map((index) => (
                                <div key={index} className={'hotel_details_amenities flex flex-col gap-2'}>
                                    <div className={'bg-[#FCF6F8] p-4 rounded-full w-max'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="32" height="32"
                                             viewBox="0 0 26 26"
                                             fill={'#E63454'}>

                                            <path
                                                d="M 7 3 C 5.34375 3 4 4.34375 4 6 C 4 7.65625 5.34375 9 7 9 C 8.65625 9 10 7.65625 10 6 C 10 4.34375 8.65625 3 7 3 Z M 24.34375 3.15625 C 24.15625 3.140625 23.964844 3.226563 23.875 3.40625 L 17.59375 15.8125 C 17.472656 16.050781 17.566406 16.328125 17.8125 16.4375 L 19.25 17.0625 C 19.496094 17.171875 19.765625 17.058594 19.875 16.8125 L 22.3125 11.3125 L 22.15625 17.875 L 17.125 17.875 C 17.113281 17.875 17.105469 17.875 17.09375 17.875 C 17.007813 17.375 16.597656 17.003906 15.25 17.125 C 14.421875 17.199219 10.65625 17.46875 10.65625 17.46875 C 10.3125 16.953125 7.394531 11.523438 7.03125 10.96875 C 6.675781 10.425781 6.359375 10 5.59375 10 L 3.96875 10 C 3.570313 10 2.261719 10.53125 1.09375 14.78125 C 0.195313 18.058594 0 23 0 23 L 6.5 23 L 6.875 16.9375 C 6.875 16.9375 8.488281 19.328125 8.78125 19.65625 C 9.222656 20.15625 9.300781 20.304688 9.84375 20.21875 C 10.011719 20.191406 11.027344 20.050781 12 19.90625 L 12 21 L 26 21 L 26 19 L 24.15625 19 C 24.167969 18.921875 24.195313 18.859375 24.1875 18.78125 L 23.375 8.90625 L 25.46875 4.21875 C 25.578125 3.972656 25.457031 3.683594 25.21875 3.5625 L 24.53125 3.21875 C 24.472656 3.1875 24.40625 3.160156 24.34375 3.15625 Z"></path>
                                        </svg>
                                    </div>
                                    <div className={'text-sm font-semibold'}>Dedicated Workspace</div>
                                    <div className={'text-sm text-dark_gray '}>A private room with wifi that’s
                                        well-suited
                                        for working.
                                    </div>
                                </div>
                            ))}
                        </div>
                        <hr className={'rounded-2xl bg-gray border-gray'}/>
                        <div className={'about_container my-10'}>
                            <h2 className={'text-xl font-semibold mb-2'}>About This Place</h2>
                            <p className={'text-sm text-dark_gray text-justify mb-6'}>Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing
                                elit. Ad,
                                architecto, at aut deserunt
                                esse eum excepturi hic laudantium magni neque nostrum numquam odit optio quibusdam
                                quisquam quos repudiandae ullam ut.
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam at commodi
                                dignissimos dolorum eligendi ex, laborum molestias non reiciendis rem rerum sint ullam!
                                Cumque dolorum excepturi exercitationem sequi veritatis!</p>

                            <h3 className={'text-md font-semibold mb-2'}>The Space</h3>
                            <p className={'text-sm text-dark_gray text-justify mb-6'}>Lorem ipsum dolor sit amet,
                                consectetur
                                adipisicing elit. A, adipisci architecto corporis deleniti doloribus eligendi eum
                                excepturi, id ipsum laudantium neque odit provident quisquam similique sit tempore vel
                                velit voluptates?</p>

                            <div
                                className={'text-highlight font-semibold text-sm p-2 border border-highlight rounded-xl w-max hover:bg-[#FDF6F9] transition-200 cursor-pointer mt-6'}>Read
                                More
                            </div>
                        </div>
                        <hr className={'rounded-2xl bg-gray border-gray'}/>
                        <div className={'hotel_details_amenities flex flex-col gap-4 my-10'}>
                            <h2 className={'text-xl font-semibold mb-2'}>What This Place Offers</h2>
                            <div className={'grid grid-cols-3 grid-flow-row gap-4'}>
                                {Array.from([1, 2, 3, 4, 5, 6]).map(() => (
                                    <div className={'flex flex-row gap-4 items-center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="24" height="24"
                                             viewBox="0 0 48 48">
                                            <path
                                                d="M 24 4 C 21.878724 4 20.493335 5.1646027 19.767578 6 L 14.5 6 C 10.336063 6 6.8572188 9.0344386 6.1425781 13 L 5.5 13 A 1.50015 1.50015 0 1 0 5.5 16 L 42.5 16 A 1.50015 1.50015 0 1 0 42.5 13 L 41.857422 13 C 41.142781 9.0344386 37.663937 6 33.5 6 L 28.232422 6 C 27.506665 5.1646027 26.121276 4 24 4 z M 14.5 9 L 20.185547 9 A 1.50015 1.50015 0 0 0 20.78125 9 L 27.214844 9 A 1.50015 1.50015 0 0 0 27.8125 9 L 33.5 9 C 36.033975 9 38.143355 10.683167 38.791016 13 L 9.2089844 13 C 9.8566446 10.683167 11.966025 9 14.5 9 z M 6 18 L 6 22.074219 L 4.1699219 21.158203 A 1.50015 1.50015 0 0 0 3.4472656 20.990234 A 1.50015 1.50015 0 0 0 2.8300781 23.841797 L 6 25.425781 L 6 35.5 C 6 39.071938 8.9280619 42 12.5 42 L 35.5 42 C 39.071938 42 42 39.071938 42 35.5 L 42 25.425781 L 45.169922 23.841797 A 1.50015 1.50015 0 0 0 44.507812 20.990234 A 1.50015 1.50015 0 0 0 43.830078 21.158203 L 42 22.074219 L 42 18 L 39 18 L 39 24.214844 A 1.50015 1.50015 0 0 0 39 24.8125 L 39 35.5 C 39 37.450062 37.450062 39 35.5 39 L 12.5 39 C 10.549938 39 9 37.450062 9 35.5 L 9 24.814453 A 1.50015 1.50015 0 0 0 9 24.21875 L 9 18 L 6 18 z"></path>
                                        </svg>
                                        <div className={'w-max text-dark_gray text-sm'}>Kitchen</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <hr className={'rounded-2xl bg-gray border-gray'}/>
                        <div className={'hotel_details_reviews flex flex-col gap-4 my-10'}>
                            <h2 className={'text-xl font-semibold mb-2'}>Reviews</h2>
                            <div className={'flex flex-col items-center border border-gray rounded-2xl'}>
                                {Array.from([1, 2, 3, 4, 5, 6]).map(() => (
                                    <div className={'flex flex-row justify-between p-4 w-full items-center'}>
                                        <h2 className={'text-sm font-semibold'}>Cleanliness</h2>

                                        <div className={'progress_bar h-2 bg-gray w-3/5 rounded-full'}>
                                            <div
                                                className={'progress_bar_fill h-full bg-highlight rounded-full w-2/3'}>
                                            </div>
                                        </div>
                                        <div className={'text-sm text-dark_gray'}>4.5</div>
                                    </div>
                                ))}
                            </div>
                            <div className={'comments grid grid-cols-2 grid-flow-row gap-5'}>
                                {Array.from([1, 2, 3, 4]).map(() => (
                                    <div className={'comment flex flex-col gap-4 p-4 border-gray border rounded-2xl'}>
                                        <div className={'comment_head flex flex-row items-center'}>
                                            <div className={'comment_head_img w-14 h-14 rounded-full bg-gray'}>
                                            </div>
                                            <div className={'comment_head_info flex flex-col gap-1 ml-2'}>
                                                <h2 className={'text-sm font-semibold'}>John Doe</h2>
                                                <div className={'text-xs text-dark_gray'}>2 days ago</div>
                                            </div>
                                        </div>
                                        <div className={'comment_body'}>
                                            <p className={'text-sm text-dark_gray text-left'}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto,
                                                cupiditate repudiandae! Adipisci corporis cumque doloremque
                                                exercitationem facere maxime minus, mollitia omnis porro quae quod rem
                                                soluta sunt totam voluptates voluptatum?</p></div>
                                    </div>
                                ))}
                            </div>
                            <div
                                className={'text-highlight font-semibold text-sm p-2 border border-highlight rounded-xl w-max hover:bg-[#FDF6F9] transition-200 cursor-pointer mt-6'}>Read
                                More
                            </div>
                        </div>
                        <hr className={'rounded-2xl bg-gray border-gray'}/>
                        <div className={'hotel_details_location flex flex-col gap-4 my-10'}>
                            <h2 className={'text-xl font-semibold mb-2'}>Where You'll Be</h2>
                            <div className={'map w-full h-96 rounded-2xl bg-gray overflow-hidden'}>
                                <iframe
                                    src={`https://maps.google.com/maps?q=${hotel.data.location.lat},${hotel.data.location.long}&z=13&output=embed`}
                                    loading="lazy"
                                    height={'100%'}
                                    width={'100%'}
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <h2 className={'text-md font-semibold address'}>
                                {hotel.data.address}
                            </h2>
                            <p className={'text-dark_gray text-sm'}>
                                lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci
                            </p>
                            <div
                                className={'text-highlight font-semibold text-sm p-2 border border-highlight rounded-xl w-max hover:bg-[#FDF6F9] transition-200 cursor-pointer mt-3'}>Read
                                More
                            </div>
                        </div>
                        <hr className={'rounded-2xl bg-gray border-gray'}/>
                        <div className={'hotel_details_host flex flex-col gap-4 my-10'}>
                            <h2 className={'text-xl font-semibold mb-2'}>Your Host</h2>
                            <div className={'host flex flex-row gap-4 justify-between items-center'}>
                                <div className={'host_head flex flex-row items-center gap-3 w-max'}>
                                    <div className={'host_head_img w-16 h-16 rounded-full bg-gray'}>
                                    </div>
                                    <div className={'host_head_info flex flex-col gap-1 ml-2'}>
                                        <h2 className={'text-md font-semibold'}>John Doe</h2>
                                        <div className={'text-sm text-dark_gray'}>Joined in 2014</div>
                                    </div>
                                </div>
                                <div
                                    className={'text-primary font-semibold my-auto text-md p-4 border border-primary rounded-xl w-max hover:bg-[#FDF6F9]  hover:border-highlight duration-200 ease-in-out cursor-pointer'}>
                                    Contact Host
                                </div>
                            </div>
                            <div className={'host_body'}>
                                <div className={'flex flex-row gap-10'}>
                                    <div className={'flex flex-row gap-3 items-center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="18" height="18"
                                             viewBox="0 0 50 50">
                                            <path
                                                d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                                        </svg>
                                        2,436 Reviews
                                    </div>
                                    <div className={'flex flex-row gap-3 items-center'}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="18" height="18"
                                             viewBox="0 0 50 50">
                                            <path
                                                d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                                        </svg>
                                        2,436 Reviews
                                    </div>
                                </div>
                                <p className={'text-sm text-dark_gray text-left mt-5'}>
                                    As a father of 4, living in Solana Beach for 25+ years, I love to help families
                                    enjoy our beautiful area. Vacations are special and we do our very best to make them
                                    affordable, enjoy…
                                </p>
                            </div>
                            <div
                                className={'text-highlight font-semibold my-auto text-md p-2 border border-highlight rounded-xl w-max hover:bg-[#FDF6F9] transition-200 cursor-pointer'}>
                                See Profile
                            </div>
                        </div>
                    </div>
                    <div className={'hotel_details_checkout flex flex-col sticky top-0 h-max w-1/3 gap-3'}>
                        <div
                            className={'hotel_details_checkout_info w-full flex flex-col gap-4 h-max bg-[#F5F4F5] border border-gray rounded-2xl py-3 px-4'}>
                            <div
                                className={'hotel_details_checkout_head flex flex-row items-center justify-between gap-4'}>
                                <div className={'hotel_details_checkout_head_price text-dark_gray text-md'}>
                                <span
                                    className={'font-semibold text-xl text-primary'}>${hotelData.price_per_night}</span> /night
                                </div>
                                <div
                                    className={'hotel_details_checkout_head_rating text-dark_gray flex flex-row gap-2 items-center'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                         width="18" height="18"
                                         fill={'text-primary'}
                                         viewBox="0 0 50 50">
                                        <path
                                            d="M10.2,48.6c-0.2,0-0.4-0.1-0.6-0.2c-0.3-0.2-0.5-0.7-0.4-1.1l4.4-16.4L0.4,20.2C0,20-0.1,19.5,0,19.1 c0.1-0.4,0.5-0.7,0.9-0.7l17-0.9l6.1-15.9C24.2,1.3,24.6,1,25,1c0.4,0,0.8,0.3,0.9,0.6l6.1,15.9l17,0.9c0.4,0,0.8,0.3,0.9,0.7 c0.1,0.4,0,0.8-0.3,1.1L36.4,30.9l4.4,16.4c0.1,0.4,0,0.8-0.4,1.1c-0.3,0.2-0.8,0.3-1.1,0L25,39.2l-14.3,9.2 C10.5,48.6,10.4,48.6,10.2,48.6z"></path>
                                    </svg>
                                    <span>4.8</span>
                                </div>
                            </div>
                            <div className={'hotel_details_checkout_body flex flex-col gap-4'}>
                                <div
                                    className={'hotel_details_checkout_body_checkin_out flex flex-row gap-4 justify-around'}>
                                    <div
                                        className={'hotel_details_checkout_body_checkinout_checkin flex flex-col gap-1 w-full'}>
                                        <div className={'text-dark_gray text-xs font-semibold'}>Check-in</div>
                                        <div
                                            className={'flex flex-row justify-around items-center p-3 bg-white ease-in-out duration-300 border border-gray hover:border-highlight w-full rounded-lg'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                 width="22" height="22"
                                                 viewBox="0,0,256,256">
                                                <g fill="#717171" fillRule="nonzero" stroke="none" strokeWidth="1"
                                                   strokeLinecap="butt"
                                                   strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray=""
                                                   strokeDashoffset="0"
                                                   fontFamily="none" fontWeight="none" fontSize="none"
                                                   textAnchor="none"
                                                   style={{mixBlendMode: 'normal'}}>
                                                    <g transform="scale(10.66667,10.66667)">
                                                        <path
                                                            d="M6,1v2h-1c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2v-14c0,-1.1 -0.9,-2 -2,-2h-1v-2h-2v2h-8v-2zM5,5h1h2h8h2h1v2h-14zM5,9h14v10h-14z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className={'text-dark_gray text-sm font-semibold'}>Fri, 10 Sep</div>
                                        </div>
                                    </div>
                                    <div
                                        className={'hotel_details_checkout_body_checkinout_checkout flex flex-col gap-1 w-full'}>
                                        <div className={'text-dark_gray text-xs font-semibold'}>Check-out</div>
                                        <div
                                            className={'flex flex-row justify-around items-center p-3 bg-white ease-in-out duration-300 border border-gray hover:border-highlight w-full rounded-lg'}>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                 width="22" height="22"
                                                 viewBox="0,0,256,256">
                                                <g fill="#717171" fillRule="nonzero" stroke="none" strokeWidth="1"
                                                   strokeLinecap="butt"
                                                   strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray=""
                                                   strokeDashoffset="0"
                                                   fontFamily="none" fontWeight="none" fontSize="none"
                                                   textAnchor="none"
                                                   style={{mixBlendMode: 'normal'}}>
                                                    <g transform="scale(10.66667,10.66667)">
                                                        <path
                                                            d="M6,1v2h-1c-1.1,0 -2,0.9 -2,2v14c0,1.1 0.9,2 2,2h14c1.1,0 2,-0.9 2,-2v-14c0,-1.1 -0.9,-2 -2,-2h-1v-2h-2v2h-8v-2zM5,5h1h2h8h2h1v2h-14zM5,9h14v10h-14z"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                            <div className={'text-dark_gray text-sm font-semibold'}>Sat, 11 Sep</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={'hotel_details_checkout_body_guests flex flex-col gap-1'}>
                                    <div className={'text-dark_gray text-xs font-semibold'}>Guests</div>
                                    <div
                                        className={'flex flex-row justify-between items-center p-3 bg-white ease-in-out duration-300 border border-gray hover:border-highlight w-full rounded-lg'}>
                                        <span className={'text-dark_gray text-sm font-semibold'}>{1} Guests</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             fill={'#717171'}
                                             width="16" height="16"
                                             viewBox="0 0 48 48">
                                            <path
                                                d="M38.5,13h-29c-0.57,0-1.092,0.323-1.345,0.835c-0.253,0.511-0.193,1.122,0.152,1.575l14.5,19 C23.092,34.782,23.532,35,24,35s0.908-0.218,1.192-0.59l14.5-19c0.346-0.453,0.405-1.064,0.152-1.575 C39.592,13.323,39.07,13,38.5,13z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <hr className={'rounded-2xl bg-dark_gray border-gray'}/>
                                <div className={'hotel_details_checkout_body_price_break flex flex-col gap-1'}>
                                    <div className={'text-dark_gray text-xs font-semibold'}>Price Breakdown</div>
                                    {Array.from([1, 2, 3]).map(() => (
                                        <div
                                            className={'flex flex-row justify-between items-center'}>
                                    <span
                                        className={'text-primary text-sm font-semibold flex flex-row items-center gap-1'}>1 Night
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                             width="12" height="12"
                                             fill={'#717171'}
                                             viewBox="0 0 24 24">
                                        <path
                                            d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 9 L 13 9 L 13 7 L 11 7 z M 11 11 L 11 17 L 13 17 L 13 11 L 11 11 z"></path>
                                        </svg>
                                    </span>
                                            <span
                                                className={'text-dark_gray text-sm'}>${hotelData.price_per_night}</span>
                                        </div>))}
                                </div>
                                <hr className={'rounded-2xl bg-dark_gray border-gray'}/>
                                <div
                                    className={'hotel_details_checkout_body_total_price flex flex-row items-start justify-between'}>
                                    <div className={'flex flex-col justify-start items-start'}>
                                        <div className={'text-primary text-lg font-semibold'}>Total</div>
                                        <div
                                            className={'text-dark_gray text-xs font-semibold'}>Before Taxes
                                        </div>
                                    </div>
                                    <div
                                        className={'text-primary text-lg font-semibold'}>${hotel.data.price_per_night}</div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={'hotel_details_checkout_footer flex flex-row justify-between gap-2 bg-[#FCF7F9] p-4 border-gray border rounded-lg'}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="50" height="50"
                                 fill={'#E63454'}
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 15 2.96875 C 14.96875 2.976563 14.9375 2.988281 14.90625 3 L 14.5625 3 L 14.4375 3.15625 C 14.414063 3.175781 14.394531 3.195313 14.375 3.21875 L 14.34375 3.25 C 14.324219 3.257813 14.300781 3.269531 14.28125 3.28125 L 14.28125 3.3125 C 14.234375 3.351563 14.195313 3.390625 14.15625 3.4375 L 0.96875 17.3125 L 0.375 17.9375 L 0.90625 18.625 L 23.96875 48.3125 C 24.035156 48.636719 24.257813 48.902344 24.5625 49.03125 L 25 49.625 L 25.46875 49 C 25.761719 48.863281 25.96875 48.597656 26.03125 48.28125 C 26.03125 48.269531 26.03125 48.261719 26.03125 48.25 L 49.09375 18.625 L 49.625 17.9375 L 49.03125 17.3125 L 35.875 3.5 C 35.855469 3.476563 35.835938 3.457031 35.8125 3.4375 L 35.8125 3.40625 C 35.785156 3.371094 35.753906 3.339844 35.71875 3.3125 L 35.6875 3.25 C 35.640625 3.203125 35.585938 3.160156 35.53125 3.125 L 35.4375 3 L 35.15625 3 C 35.09375 2.984375 35.03125 2.972656 34.96875 2.96875 C 34.90625 2.972656 34.84375 2.984375 34.78125 3 L 15.09375 3 C 15.0625 2.988281 15.03125 2.976563 15 2.96875 Z M 15.8125 5 L 22.71875 5 L 13.71875 14.71875 Z M 27.28125 5 L 34.1875 5 L 36.28125 14.6875 Z M 25 5.46875 L 35.71875 17 L 14.25 17 Z M 36.71875 7.25 L 45.96875 17 L 38.78125 17 Z M 13.28125 7.28125 L 11.1875 17 L 4.03125 17 Z M 3.75 19 L 11.34375 19 L 20.96875 41.1875 Z M 13.5 19 L 36.5 19 L 25 45.5 Z M 38.625 19 L 46.25 19 L 29.03125 41.1875 Z"></path>
                            </svg>
                            <div className={'fle flex-col text-primary'}>
                                <h3 className={'font-semibold'}>This is a rare find</h3>
                                <p className={'text-sm text-dark_gray'}>Kathryn's place on Airbnb is usually fully
                                    booked.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
}
