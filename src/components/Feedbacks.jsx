import React from "react";
import { useState, useEffect, react } from "react";
import contactimg from "../assets/contact-img.svg";
import { styles } from "../styles.js";
import { easeInOut, easeOut, motion } from "framer-motion";
// import axios from "axios";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Feedbacks = () => {
  const isMobile = window.innerWidth <= 768;
  const [mailinfo, setmailinfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  //Sending mail through EmailJs from website
  const takingInput = () => {
    emailjs.send(serviceID, templateID, templateParams, publicKey).then(
      function (response) {
        console.log(
          "email sent successfully !",
          response.status,
          response.text
        );
        toast.success("Email sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      },
      function (error) {
        console.log("error in sending email", error);
        toast.error("🦄 Failed to send the email", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    );
    

    setmailinfo((prevMailinfo) => ({
      ...prevMailinfo,
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    }));
  };

  //Id's for sending mail through website (EmailJs)
  const serviceID = "service_vqe6jtu";
  const templateID = "template_5udre7j";
  const publicKey = "uu5pldmg7xNlNU6je";
  const templateParams = {
    from_name: mailinfo.firstname + " " + mailinfo.lastname,
    from_email: mailinfo.email,
    message: mailinfo.message,
  };

  return (
    <>
  
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ zIndex: 10000,marginTop:"90px"}} 
        
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"

        style={{ zIndex: 10000,marginTop:"90px"}} 
      />

      <div className="md:px-[95px] sm:px-[50px] bg-bgcolor lg:pt-20 sm:pt-10 mt-16">
        <div className="flex lg:flex-row sm:flex-col  lg:gap-10 sm:gap-6">
          <div>
            <img
              src={contactimg}
              className="w-full h-full sm:justify-center"
            ></img>
          </div>
          <div>
            <motion.h1
              className={`${styles.heroHeadText}text-white mb-3 font-Montserrat`}
            >
              Let's interact!
            </motion.h1>
            <br></br>
            <form className="flex flex-col gap-[30px]">
              <div className="flex lg:flex-row sm:flex items-center gap-10">
                <input
                  name="firstname"
                  onChange={(e) => {
                    setmailinfo({
                      ...mailinfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  id="firstName"
                  value={mailinfo.firstname}
                  type="text"
                  placeholder="Your first name"
                  className="bg-white px-3 rounded-xl border-white border-2 w-[300px] h-[50px] text-black"
                ></input>
                <input
                  name="lastname"
                  onChange={(e) => {
                    setmailinfo({
                      ...mailinfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  id="lastName"
                  type="text"
                  value={mailinfo.lastname}
                  placeholder="Your last name"
                  className="bg-white px-3 rounded-xl border-white border-2 w-[300px] h-[50px] text-black"
                ></input>
              </div>
              <div>
                <input
                  name="email"
                  onChange={(e) => {
                    setmailinfo({
                      ...mailinfo,
                      [e.target.name]: e.target.value,
                    });
                  }}
                  id="formEmail"
                  type="email"
                  value={mailinfo.email}
                  placeholder="Your email"
                  className="bg-white px-3 rounded-xl border-white border-2 w-[300px] h-[50px] text-black"
                ></input>
              </div>

              <div>
                <div class="max-w-md rounded-lg shadow-md">
                  <textarea
                    name="message"
                    onChange={(e) => {
                      setmailinfo({
                        ...mailinfo,
                        [e.target.name]: e.target.value,
                      });
                    }}
                    value={mailinfo.message}
                    id="formMessage"
                    className="w-full h-32 py-3 px-2 text-start border-2 rounded-xl resize-none focus:ring focus:ring-blue-400  bg-white border-white text-black"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.button
                  onClick={takingInput}
                  className="px-6 py-3 flex select-none items-center gap-1 rounded-lg bg-gradient-to-tr mt-4 from-purple-800 to-cyan-400  text-center align-middle font-sans text-[15px] font-bold uppercase text-white shadow-md shadow-cyan-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
                  type="button"
                  data-ripple-light="true"
                  whileHover={{ scale: 1.1 }}
                >
                  Send
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbacks;
