import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhoneCall } from "react-icons/fi";
const Index = () => {
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const submit = () => {
    window.alert("Message Sent!", fullName, email, message);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className="relative items-center flex flex-col w-full h-[95vh] md:h-screen bg-transparent text-white">
      <div className="flex flex-col items-center justify-center gap-2 mt-12 text-3xl font-bold h-28">
        Contact
        <div className="w-20 border"></div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-5 rounded-lg md:gap-20 md:w-2/3 backdrop-blur-sm bg-black/50 backdropFilter h-96">
        <div className="flex flex-col items-center justify-center w-full gap-5 md:flex-row">
          <input
            required
            type="text"
            className="w-48 p-4 bg-transparent border-b focus:border-0 md:w-1/2"
            placeholder="FullName"
            onChange={(e) => setFullName(e.target.value)}
          />{" "}
          <input
            required
            type="email"
            className="w-48 p-4 bg-transparent border-b focus:border-0 md:w-1/2"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input
          required
          type="textarea"
          className="w-48 p-4 bg-transparent border-b focus:border-0 md:w-full"
          placeholder="Your Message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={submit}
          type="submit"
          className="p-2 pb-2 border-b hover:border-b-0 hover:border-l-2 hover:transition-transform hover:duration-700"
        >
          Send Message
        </button>
      </div>
      <br />
      <div className="flex flex-col h-auto p-5 rounded-lg md:p-0 backdrop-blur-sm bg-black/50 md:w-2/3 md:flex-row ">
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:border-r md:w-1/3">
          <div className="text-2xl md:text-4xl">
            <AiOutlineMail />
          </div>
          <p className="md:text-2xl">tilak.81oli@gmail.com</p>
          <span className="text-xl">Email</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:border-r md:w-1/3">
          <div className="text-2xl md:text-4xl">
            <GoLocation />
          </div>
          <p className="md:text-2xl">123 Lorem Ipsum, USA</p>
          <span className="text-xl">Address</span>
        </div>
        <div className="flex flex-col items-center justify-center w-full h-full gap-5 p-3 md:w-1/3">
          <div className="text-2xl md:text-4xl">
            <FiPhoneCall />
          </div>
          <p className="md:text-2xl">(+977) 123 456 7890</p>
          <span className="text-xl">Phone</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
