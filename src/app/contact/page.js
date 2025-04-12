"use client"
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialty: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form - Left Side (White Background) */}
          <div className="md:w-1/2">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              If you would like to know more about Echo Locum Tenens, complete the form below to email our team.
            </h2>
            
            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="specialty" className="text-sm font-medium text-gray-700 mb-1">Specialty</label>
                <select
                  id="specialty"
                  name="specialty"
                  value={formData.specialty}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                >
                  <option value="">Select your specialty</option>
                  <option value="Emergency Medicine">Emergency Medicine</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-yellow-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Details - Right Side (With Background) */}
          <div className="md:w-1/2 bg-blue-50 p-6 rounded-lg">
            <div className="bg-yellow-500 px-4 py-2 mb-6">
              <h2 className="text-xl font-semibold text-white">Contact</h2>
            </div>
            
            <div className="space-y-12"> {/* Increased spacing */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium text-gray-800">Echo Locum Tenens</h3>
                <p className="text-gray-600">1301 Solana Boulevard</p>
                <p className="text-gray-600">Building 2, Suite 2200</p>
                <p className="text-gray-600">Westlake, TX 76262</p>
                <p className="text-gray-600 mt-2">P: 817-693-5487</p>
              </div>

              <div className="space-y-8">
                <h3 className="text-lg font-medium text-gray-800">Employment Verifications</h3>
                <p className="text-gray-600">E: employmentverifications@echolocum.com</p>
                <p className="text-gray-600">P: 817-767-6168</p>
                <p className="text-gray-600">F: 817-751-7571</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800">Privileging Department</h3>
                <p className="text-gray-600">P: 253-393-2697</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;