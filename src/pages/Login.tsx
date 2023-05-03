import '../styles/Login.module.css';
import login from '../assets/login_image.jpg';

export function Login() {
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
                        <div className={'text-5xl font-semibold'}>Create an Account</div>
                        <p className={'text-sm mt-2 text-dark_gray'}>Find a place that feels "just like" your
                            home...</p>

                        <div
                            className={'border-2 border-dark_gray rounded-2xl w-3/5 h-max p-3 mt-14 font-semibold flex flex-row justify-center gap-3'}>
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
                            className={'border-2 border-dark_gray rounded-2xl w-3/5 h-max p-3 mt-4 font-semibold flex flex-row justify-center gap-3'}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 width="24" height="24"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                            </svg>
                            Continue with Apple
                        </div>
                        <div className={'text-sm mt-4 text-dark_gray'}>or</div>
                        <div className={'flex flex-col gap-2 mt-4'}>
                            <div className={'flex flex-row gap-3 w-full'}>
                                <input type="text"
                                       placeholder={'First Name'}
                                       className={'border-2 border-dark_gray rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight'}/>
                                <input type="text"
                                       placeholder={'Last Name'}
                                       className={' border-2 border-dark_gray rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight'}/>
                            </div>
                            <input type="text"
                                   placeholder={'Email'}
                                   className={' border-2 border-dark_gray rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight'}/>
                            <input type="password"
                                   placeholder={'Password'}
                                   className={' border-2 border-dark_gray rounded-2xl w-full h-max p-3 font-semibold focus:outline-highlight'}/>
                        </div>
                    </div>
                </div>
                <div
                    className={'image__container overflow-hidden w-1/2 h-full  flex flex-col justify-center items-center rounded-3xl'}>
                    <div className={'w-full h-full bg-gray flex flex-col justify-center items-center'}></div>
                </div>
            </div>
        </>
    );
}
