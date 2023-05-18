import {useEffect, useState} from 'react';
import axios from 'axios';
import {Simulate} from 'react-dom/test-utils';
import error = Simulate.error;
import {NavBar} from '../components/NavBar.tsx';
import {useNavigate} from 'react-router-dom';

export function UserPage({userId}) {
    const navigate = useNavigate();


    const [loginData, setLoginData] = useState({
        id: '',
        firstName: 'Shantanu',
        lastName: 'Mane',
        email: 'manesg@rknec.edu',
        password: '',
    });

    useEffect(() => {
        return () => {
            const user = JSON.parse(localStorage.getItem('userDetails')) || null;
            setLoginData({
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: '',
            });
        };
    }, []);

    const handleChange = (event: any) => {
        setLoginData({...loginData, [event.target.name]: event.target.value});
    };

    const handleUpdate = (event: any) => {
        event.preventDefault();

        console.log(loginData);

        axios.post('http://localhost:5000/api/v1.0/user/update', {
            id: loginData.id,
            firstname: loginData.firstName,
            lastName: loginData.lastName,
            email: loginData.email,
            password: loginData.password,
        }, {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjQ1M2RkMTYyYWVlZDNkMGMzMTIwYzEwIiwiZW1haWwiOiJzaGFudGFudS5tYW5lLjJAZ21haWwuY29tIn0sImlhdCI6MTY4MzIxNzY4NiwiZXhwIjoxNjkwOTkzNjg2fQ.iIZHyB60Xd6jLeTzAv_RSb7xHvJ8dtv760x5VGfv1N8',
            },
        }).then((response) => {
            console.log(response);
            localStorage.setItem('userDetails', JSON.stringify({
                id: loginData.id,
                firstname: loginData.firstName,
                lastName: loginData.lastName,
                email: loginData.email,
            }));
            navigate('/user');
        }).catch((error) => {
            console.log(error);
        });

    };

    const handleDelete = (event: any) => {
        event.preventDefault();
        axios.post('http://localhost:5000/api/v1.0/user/delete', {
            id: loginData.id,
        })
            .then((response) => {
                console.log(response);
            }).catch((error) => {
            console.log(error);
        });
        console.log('delete');
        localStorage.removeItem('userDetails');
        navigate('/');
    };


    return (
        <>
            <NavBar setIsAuthenticated={null}/>
            <main className={'flex flex-col items-center justify-center h-screen'}>
                <h2 className={'text-3xl font-semibold'}>Update Details</h2>
                <div className={'flex flex-col gap-2 mt-4 w-2/5'}>
                    <form className={'w-full'} method={''}>
                        <div className={'flex flex-row gap-3 w-full mt-2'}>
                            <input type="text"
                                   name={'firstName'}
                                   placeholder={loginData.firstName}
                                   value={loginData.firstName}
                                   onChange={handleChange}
                                   required={true}
                                   className={'border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                            <input type="text"
                                   name={'lastName'}
                                   placeholder={loginData.lastName}
                                   value={loginData.lastName}
                                   onChange={handleChange}
                                   required={true}
                                   className={' border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                        </div>
                        <input type="text"
                               name={'email'}
                               placeholder={loginData.email}
                               value={loginData.email}
                               required={true}
                               onChange={handleChange}
                            // disabled={}
                               className={'mt-3 border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                        {/*{formDataErrors.email && <div className={'text-xs text-red-500'}>invalid email*</div>}*/}
                        {/*{(formDataErrors.login || formDataErrors.register) &&*/}
                        {/*    <div className={'text-xs text-red-500'}>User could not be logged in</div>}*/}
                        <input type="password"
                               name={'password'}
                               autoComplete={'on'}
                               value={loginData.password}
                               required={true}
                               onChange={handleChange}
                               placeholder={'Password'}
                               className={'mt-3 border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                        {/*{formDataErrors.password &&*/}
                        {/*    <div className={'text-xs text-red-500'}>must be 8 letters, and must contain both a-z*/}
                        {/*        & A-Z</div>}*/}
                        {/*{(formDataErrors.login || formDataErrors.register) &&*/}
                        {/*    <div className={'text-xs text-red-500'}>User could not be logged in</div>}*/}
                        <input type={'submit'}
                               value={'Update'}
                               onClick={handleUpdate}
                               className={'w-full bg-[#FCF7F9] border-2 border-highlight mt-5 p-4 text-highlight font-semibold text-xl rounded-2xl cursor-pointer hover:bg-highlight hover:text-white duration-300 ease-in-out'}/>
                        <input type={'submit'}
                               value={'Delete User'}
                               onClick={handleDelete}
                               className={'w-full bg-[#FCF7F9] border-2 border-highlight mt-5 p-4 text-highlight font-semibold text-xl rounded-2xl cursor-pointer hover:bg-highlight hover:text-white duration-300 ease-in-out'}/>
                    </form>

                </div>
            </main>
        </>
    );
}
