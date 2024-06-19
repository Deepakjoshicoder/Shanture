import React, { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [panCardNumber, setPanCardNumber] = useState('');
  const [panCardFile, setPanCardFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateName = (name) => {
    const nameRegex = /^[A-Za-z]+$/;
    return nameRegex.test(name);
  };

  const validatePanCard = (panCardNumber) => {
    const panCardRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panCardRegex.test(panCardNumber);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required';
    } else if (!validateName(firstName)) {
      newErrors.firstName = 'First name must contain only letters';
    }

    if (!lastName) {
      newErrors.lastName = 'Last name is required';
    } else if (!validateName(lastName)) {
      newErrors.lastName = 'Last name must contain only letters';
    }

    if (!email || !validateEmail(email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!phoneNumber) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (phoneNumber.length < 10) {
      newErrors.phoneNumber = 'Phone number must be at least 10 digits';
    }

    if (!panCardNumber) {
      newErrors.panCardNumber = 'PAN card number is required';
    } else if (!validatePanCard(panCardNumber)) {
      newErrors.panCardNumber = 'PAN card number must follow the format AAAAA9999A';
    }

    if (!panCardFile) {
      newErrors.panCardFile = 'PAN card file is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', { firstName, lastName, email, phoneNumber, panCardNumber, panCardFile });
    }
  };

  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gray-500'>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-20 w-auto"
          src="https://shanture.com/wp-content/uploads/2024/06/cropped-2.png"
          alt="Your Company"
        />
      </div>

      <div className="light:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto p-4">
          <div className="bg-white light:bg-gray-700 shadow rounded-lg p-6">
            <h1 className="text-xl font-semibold mb-4 text-gray-900 light:text-gray-100">
              Personal Information
            </h1>
            <p className="text-gray-600 light:text-gray-300 mb-6">
              Use a permanent address where you can receive mail.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Pan Card Number"
                    value={panCardNumber}
                    onChange={(e) => setPanCardNumber(e.target.value)}
                    className="border p-2 rounded w-full"
                  />
                  {errors.panCardNumber && <p className="text-red-500 text-sm">{errors.panCardNumber}</p>}
                </div>
                <div>
                  <input
                    type="file"
                    onChange={(e) => setPanCardFile(e.target.files[0])}
                    className="border p-2 rounded w-full"
                  />
                  {errors.panCardFile && <p className="text-red-500 text-sm">{errors.panCardFile}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
