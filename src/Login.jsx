import React from "react";
import Logo from "./Asset/Logo.png"



function Login () {
    return (
        <div className=" bg-[#BEC0D3] md:h-screen h-screen">
            <div className="bg-[#FFFFFF] md:mt-2 mt-2 md:mx-56 mx-10 md:shadow-lg shadow-lg md:shadow-grey-600 shadow-gray-600">
                <div className="md:flex flex flex-row">
                    <img src={Logo} alt="Logo" className="md:w-56 w-16 sm:h-2 md:h-20 h-20 sm:mx-5 md:mx-5 mx-5"/>
                    <p className="text-[#FF9E0F] sm:font-semibold md:font-semibold font-semibold sm:text-xl md:text-xl text-xs md:ml-auto ml-auto md:mr-8 mr-8 md:mt-5 mt-5">1-800-762-5383</p>
                </div>   
               <p className="text-[#4F2471] md:text-left text-left md:font-bold font-semibold md:text-xl text-xs md:ml-5 ml-1">Welcome to Socket's New Webmail!</p>
               <div className="md:flex flex flex-row">
                <div>
                    <h1 className="text-[#4F2471] md:text-left text-left md:font-extrabold font-extrabold md:text-sm text-xs md:ml-9 ml-2 md:mb-3 mb-1 md:mt-10 mt-5">New features include:</h1>
                    <li className="text-[#4F2471] md:text-left text-left md:ml-16 ml-4 md:text-sm text-xs">Folders, address book and calendar</li>
                    <li className="text-[#4F2471] md:text-left text-left md:ml-16 ml-4 md:text-sm text-xs">Message formatting - change fonts, colors and sizes</li>
                    <li className="text-[#4F2471] md:text-left text-left md:ml-16 ml-4 md:text-sm text-xs">Spam messages integrated into your email as a separate folder - not on a different site</li>
                    <h1 className="text-[#4F2471] text-left font-bold md:text-sm text-xs md:mt-7 mt-3 md:ml-9 ml-4 md:mb-24 mb-10">Go to a short <a href="https://www.socket.net/webmail-help"><span className="underline cursor-pointer">Guide to the New Webmail.</span></a></h1>
                    


                </div>
                <div className="bg-[#F8F8F8] md:w-1/2 w-1/2 md:mx-10 m-5rounded-md mb-2">
                    <form action="post" className="md:flex flex flex-col">
                        <h1 className="text-[#4F2471] md:text-2xl text-xl text-left font-bold md:mt-2 mt-1 md:mb-6 mb-2 md:ml-3 ml-1">Sign In</h1>
                        <input type="email" placeholder="Username" name="user_name" required className="md:w-auto w-auto md:mx-3 mx-1 rounded-sm border border-t-2 border-l-2 border-[#8D8C8F] placeholder-[#8D8C8F] placeholder:font-semibold pl-1" />
                        <input type="password" placeholder="Password" name="user_password" required className="md:w-auto w-auto md:mx-3 mx-1 md:my-2 my-1 rounded-sm border border-t-2 border-l-2 border-[#8D8C8F] placeholder-[#8D8C8F] placeholder:font-semibold pl-1"/>
                        <button type="submit" className="bg-[#5F3C7F] text-white text-center md:text-sm text-xs md:font-semibold md:rounded-3xl rounded-xl py-1 md:px-3 px-1 md:mx-36 mx-16 md:mb-5 mb-2">Log in</button>
                        <h6 className="text-xs text-[#B7B7B7] text-left md:mx-5 mx-1 font-sans">Need help? Call Socket Technical Support at 1-800-762-5383. We'll be happy to walk you through the new site.</h6>
                    </form>
                    <p className="text-center text-xs text-[#4F2471] underline mt-6 cursor-pointer">View Mobile Version</p>
                </div>
               </div>
            </div>


        </div>
    );
};

export default Login;