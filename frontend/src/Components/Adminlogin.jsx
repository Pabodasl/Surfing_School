import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Headernav from '../Components/Headernav';
import Footer from '../Components/Footer';

const ADMIN_URL = "http://localhost:5009/admin";

export default function Adminlogin() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isSignUp && !name) {
      errors.name = "Name is required.";
    }

    if (!email) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Invalid email format.";
    }

    if (!password) {
      errors.password = "Password is required.";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }

    if (isSignUp) {
      if (!confirmPassword) {
        errors.confirmPassword = "Please confirm your password.";
      } else if (password !== confirmPassword) {
        errors.confirmPassword = "Passwords do not match.";
      }
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    if (validateForm()) {
      try {
        const response = await axios.post(`${ADMIN_URL}/login`, {
          email,
          password
        });

        if (response.data.admin) {
          navigate('/adminhome');
        } else {
          setErrors({ form: "Invalid email or password." });
        }
      } catch (error) {
        console.error("Login error:", error);
        setErrors({ form: error.response?.data?.message || "Invalid email or password." });
      }
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');

    if (validateForm()) {
      try {
        const response = await axios.post(`${ADMIN_URL}/create`, {
          name,
          email,
          password
        });

        if (response.data.admin) {
          setSuccessMessage("Admin account created successfully! You can now login.");
          setTimeout(() => {
            setIsSignUp(false);
            setSuccessMessage('');
            setName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
          }, 2000);
        }
      } catch (error) {
        console.error("Signup error:", error);
        setErrors({ form: error.response?.data?.message || "Unable to create admin account." });
      }
    }
  };

  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setErrors({});
    setSuccessMessage('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Headernav />
      
      <div className="flex flex-1 h-screen">
        {/* Left Side: Image */}
        <div className="hidden md:flex flex-1 bg-cover bg-center" style={{ backgroundImage: "url('public/images/admin.jpg')" }} />
        
        {/* Right Side: Login/Signup Form */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-8 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="max-w-md mx-auto w-full">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {isSignUp ? 'Create Admin Account' : 'Admin Login'}
                </h2>
                <p className="text-gray-600">
                  {isSignUp 
                    ? 'Create a new admin account to manage SurfDeck' 
                    : 'Welcome back! Please enter your details.'}
                </p>
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                  {successMessage}
                </div>
              )}

              {/* Display form errors */}
              {errors.form && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {errors.form}
                </div>
              )}

              {/* Form */}
              <form onSubmit={isSignUp ? handleSignup : handleSignin}>
                {isSignUp && (
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      required
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                )}

                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="admin@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                    required
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>

                {isSignUp && (
                  <div className="mb-6">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className={`w-full p-3 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                      required
                    />
                    {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full p-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 mb-4"
                >
                  {isSignUp ? 'Create Account' : 'Log in'}
                </button>
              </form>

              {/* Toggle between Login and Signup */}
              <div className="text-center mt-6">
                <p className="text-gray-600 text-sm">
                  {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
                  <button
                    type="button"
                    onClick={toggleMode}
                    className="text-blue-600 hover:text-blue-700 font-semibold underline"
                  >
                    {isSignUp ? 'Login' : 'Create New Admin'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
