import React, { useState } from 'react';
import axios from 'axios';
import { FaTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/send-email', formData)
      .then(response => {
        // Handle successful response
        console.log('Email sent successfully:', response.data);
        // Optionally, reset form fields after submission
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(error => {
        // Handle error
        if (error.response) {
          // Request was made and server responded with a status code
          console.error('Server responded with status:', error.response.status);
        } else if (error.request) {
          // Request was made but no response was received
          console.error('No response received:', error.request);
        } else {
          // Something else happened while setting up the request
          console.error('Error setting up request:', error.message);
        }
      });
  };
  return (
    <div className="bg-gray-100 min-h-screen p-10 flex justify-center items-center w-full pl-[200px]">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              Have questions or concerns? Feel free to reach out to us. Fill out the form below
              and we'll get back to you as soon as possible.
            </p>
            <div className='flex justify-center items-center mr-[66px]'>
              <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><FaTwitter /></p>
              <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><IoMail /></p>
              <p className='m-4 bg-blue-300 rounded-full p-2 shadow-md shadow-gray-800'><IoIosCall /></p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 resize-none" required />
              </div>
              <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-300">Submit</button>
            </form>
          </div>
          <div>
            {/* Your image */}
          </div>
        </div>
      </div>
    </div>
  );
}
