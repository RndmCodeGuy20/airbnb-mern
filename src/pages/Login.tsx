import '../styles/Login.module.css';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export function Login({setIsAuthenticated, setUserId}) {

    const navigate = useNavigate();
    const tkn = '';

    const [loginData, setLoginData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const [formDataErrors, setFormDataErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        register: false,
        login: false,
    });

    const [formState, setFormState] = useState('login');

    const handleChange = (event: any) => {
        setLoginData({...loginData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!validateEmail(loginData.email)) {
            setFormDataErrors({...formDataErrors, email: true});
        } else {
            setFormDataErrors({...formDataErrors, email: false});
        }
        if (!validatePassword(loginData.password)) {
            setFormDataErrors({...formDataErrors, password: true});
        } else {
            setFormDataErrors({...formDataErrors, password: false});
        }


        // handle login
        if (formState === 'login') {
            axios.post('http://localhost:5000/api/v1.0/user/login', {
                email: loginData.email,
                password: loginData.password,
            }, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoiNjQ1M2RkMTYyYWVlZDNkMGMzMTIwYzEwIiwiZW1haWwiOiJzaGFudGFudS5tYW5lLjJAZ21haWwuY29tIn0sImlhdCI6MTY4MzIxNzY4NiwiZXhwIjoxNjkwOTkzNjg2fQ.iIZHyB60Xd6jLeTzAv_RSb7xHvJ8dtv760x5VGfv1N8',
                },
            }).then((response) => {
                console.log(response.status);
                setIsAuthenticated(true);
                console.log('inside login', response.data.data.id);
                setUserId(response.data.data.id);
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('userDetails', JSON.stringify({
                    id: response.data.data.id,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
                    email: response.data.data.email,
                }));
                navigate('/hotels');
            }).catch((error) => {
                setFormDataErrors({...formDataErrors, login: true});
                setLoginData({...loginData, email: loginData.email, password: ''});
                console.log(error);
                setIsAuthenticated(false);
            });
        } else {
            axios.post('http://localhost:5000/api/v1.0/user/register', {
                firstName: loginData.firstName,
                lastName: loginData.lastName,
                email: loginData.email,
                address: {
                    street: '1234 Main St',
                    city: 'San Francisco',
                    state: 'CA',
                },
                password: loginData.password,
            }).then((response) => {
                console.log(response.data.data.token);
                setIsAuthenticated(true);
                localStorage.setItem('token', response.data.data.token);
                setFormState('login');
            }).catch((error) => {
                setFormDataErrors({...formDataErrors, register: true});
                console.log(error);
                setIsAuthenticated(false);
            });
        }
    };

    const validateEmail = (email: string) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validatePassword = (password: string) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return re.test(password);
    };

    return (
        <>
            <div className={'p-4 flex flex-row w-screen h-screen'}>
                <div className={'w-1/2 h-full flex flex-col'}>
                    <a href="#" className="flex items-center">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/768px-Airbnb_Logo_B%C3%A9lo.svg.png?20140813142239"
                            alt={'logo'} width={102} height={32}/>
                    </a>
                    <div className={'flex flex-col items-center h-full mt-10'}>
                        <div
                            className={'text-5xl font-semibold'}>{formState === 'login' ? 'Hop Back In!' : 'Create an Account'}</div>
                        <p className={'text-sm mt-2 text-dark_gray'}>Find a place that feels "just like" your
                            home...</p>

                        <div
                            className={'border-2 border-dark_gray rounded-2xl w-3/5 h-max p-3 mt-14 font-semibold flex flex-row justify-center gap-3 hover:cursor-pointer hover:bg-[#FCF7F9] duration-300 ease-in-out'}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="24" height="24"
                                 viewBox="0 0 48 48">
                                <path fill="#fbc02d"
                                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#e53935"
                                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4caf50"
                                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1565c0"
                                      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            Continue with Google
                        </div>
                        <div
                            className={'border-2 border-dark_gray rounded-2xl w-3/5 h-max p-3 mt-4 font-semibold flex flex-row justify-center gap-3 hover:cursor-pointer hover:bg-[#FCF7F9] duration-300 ease-in-out'}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="24" height="24"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                            </svg>
                            Continue with Apple
                        </div>
                        <div className={'text-sm mt-4 text-dark_gray'}>or</div>
                        <div className={'flex flex-col gap-2 mt-4 w-3/5'}>
                            <form onSubmit={handleSubmit} className={'w-full'} method={'/hotels'}>
                                {formState === 'register' ? <div className={'flex flex-row gap-3 w-full mt-2'}>
                                    <input type="text"
                                           name={'firstName'}
                                           placeholder={'First Name'}
                                           value={loginData.firstName}
                                           onChange={handleChange}
                                           required={true}
                                           className={'border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                                    <input type="text"
                                           name={'lastName'}
                                           value={loginData.lastName}
                                           onChange={handleChange}
                                           required={true}
                                           placeholder={'Last Name'}
                                           className={' border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                                </div> : null}
                                <input type="text"
                                       name={'email'}
                                       placeholder={'Email'}
                                       value={loginData.email}
                                       required={true}
                                       onChange={handleChange}
                                       className={'mt-3 border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                                {formDataErrors.email && <div className={'text-xs text-red-500'}>invalid email*</div>}
                                {(formDataErrors.login || formDataErrors.register) &&
                                    <div className={'text-xs text-red-500'}>User could not be logged in</div>}
                                <input type="password"
                                       name={'password'}
                                       autoComplete={'on'}
                                       value={loginData.password}
                                       required={true}
                                       onChange={handleChange}
                                       placeholder={'Password'}
                                       className={'mt-3 border-2 border-dark_gray bg-[#FAFBFB] rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight focus:bg-[#FCF7F9] duration-300'}/>
                                {formDataErrors.password &&
                                    <div className={'text-xs text-red-500'}>must be 8 letters, and must contain both a-z
                                        & A-Z</div>}
                                {(formDataErrors.login || formDataErrors.register) &&
                                    <div className={'text-xs text-red-500'}>User could not be logged in</div>}
                                <input type={'submit'}
                                       value={`${formState === 'login' ? 'Login' : 'Register'}`}
                                       className={'w-full bg-[#FCF7F9] border-2 border-highlight mt-5 p-4 text-highlight font-semibold text-xl rounded-2xl cursor-pointer hover:bg-highlight hover:text-white duration-300 ease-in-out'}/>
                            </form>
                        </div>
                        <hr className={'w-3/5 mt-5 bg-gray border-gray'}/>
                        <div className={'flex flex-row gap-2 mt-5 w-3/5 items-center justify-center'}>
                            <div
                                className={'text-sm text-dark_gray'}>{formState === 'login' ? 'New here?' : 'Already have an account?'}</div>
                            <div onClick={() => {
                                formState === 'login' ? setFormState('register') : setFormState('login');
                                console.log(formState);
                            }}
                                 className={'text-sm text-highlight font-semibold cursor-pointer m-1 border-gray border hover:bg-[#FCF7F9] rounded-lg px-2 hover:border hover:border-highlight duration-300 ease-in-out'}>{formState === 'login' ? 'Register' : 'Login'}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className={'image__container overflow-hidden w-1/2 h-full flex flex-col justify-center items-center rounded-3xl'}>
                    <div className={'w-full h-screen bg-gray flex flex-col justify-center items-center'} style={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1559867185-e89ebef683d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        scale: '1',
                    }}></div>
                </div>
            </div>
        </>
    );
}
