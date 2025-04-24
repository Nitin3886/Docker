import React from 'react'
import { FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import img1 from "./img1.png"
import Footer from './Footer';

export default function Home() {
    return (
        <div>
            <div className='bg-blue-950 h-[600px] w-full flex justify-evenly'>
                <div className='flex-col justify-center items-center flex '>
                    <p className=' text-6xl ml-8 font-bold p-10 text-white w-3/4'>Protect Your <span className='text-sky-300'>Health</span> And Take care of Health...\\khhk.</p>
                    <p className='w-2/3 text-blue-300'>You can get the care you need 24/7 -be it online or in persion. You will be treated bt caring specialist doctors.</p>
                    <div className='flex justify-center items-center mr-[66px]'>
                        <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><FaTwitter /></p>
                        <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><IoMail /></p>
                        <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><IoIosCall /></p>
                    </div>
                </div>
                <div className='justify-center items-center flex'>
                    <img className='h-[460px] w-[940px]' src={img1} alt='/' />
                </div>
            </div>
            <div className="flex flex-row justify-between items-center py-12 px-4 bg-gray-100">
                <div className="w-1/3  flex flex-col mb-4 items-center space-y-2">
                    <i className="text-5xl text-blue-500 fas fa-tint"></i> {/* Replace with blood drop icon */}
                    <h3 className="text-xl font-bold text-gray-700">Find a Blood Bank</h3>
                    <p className="text-gray-600 w-1/2 text-center">
                        Locating nearby blood banks quickly and easily is crucial for individuals in need of blood donations, healthcare professionals, and emergency responders.</p>
                </div>
                <div className="w-1/3 flex m-4 flex-col items-center space-y-2">
                    <i className="text-5xl text-green-500 fas fa-user-md"></i>
                    <h3 className="text-xl font-bold  text-gray-700">Find a Good Doctor</h3>
                    <p className="text-gray-600 w-1/2 text-center">Searching for top-rated specialists in your area involves providing users with a convenient and efficient way to find healthcare professionals who are highly regarded by their patients and peers</p>
                </div>
                <div className="w-1/3 m-4 flex flex-col mb-5 items-center space-y-2">
                    <i className="text-5xl text-purple-500 fas fa-phone-alt"></i>
                    <h1 className="text-xl font-bold text-gray-700">Easy Contact</h1>
                    <p className="text-gray-600 w-1/2 text-center">Get in touch with us for any inquiries" typically refers to providing users with a means to contact the organization or business for questions, feedback, or other types of inquiries. </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
