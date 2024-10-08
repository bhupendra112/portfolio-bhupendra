import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from './Footer';
import photo from "../assets/contact-us-content.gif";

export default function Contact() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send form using EmailJS
    emailjs
      .sendForm(
        'service_w5zminr', // Replace with your EmailJS service ID
        'template_t9irjif', // Replace with your EmailJS template ID
        form.current,
        'mC99YJP5vdMePtgGE' // Replace with your public key
      )
      .then(
        (result) => {
          e.preventDefault();
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Message failed to send.');
        }
      );
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-10 bg-white">
        {/* Form Section */}
        <form
          ref={form}
          className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md md:mr-8 mb-10 md:mb-0"
          onSubmit={handleSubmit}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Image Section */}
        <div className="w-full max-w-md md:max-w-sm lg:max-w-md">
          <img src={photo} alt="Contact Us" className="w-full h-auto rounded-lg shadow-md" />
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-100">
        <Footer />
      </div>
    </>
  );
}
