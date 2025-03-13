import React from 'react';
import { useState } from 'react';
// import {ss} from '../assets/ss.png';
import ss from '../assets/ss.png';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png'; 
import { motion } from 'framer-motion';
import { CardAnimation } from './CardAnimation/cardanimation';
import Banner from './Banner';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import LoginPage from './Auth/Login';
import Login from './Auth/Login';
import Signup from './Auth/Signup';
import { X, XCircleIcon } from 'lucide-react';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const navigate = useNavigate();

  const supportedLanguages = [
    { name: 'JavaScript', icon: '🟨', description: 'Build interactive web applications' },
    { name: 'Python', icon: '🐍', description: 'Perfect for data science and automation' },
    { name: 'Java', icon: '☕', description: 'Enterprise-grade applications' },
    { name: 'C++', icon: '⚙️', description: 'High-performance computing' },
    { name: 'Go', icon: '🔵', description: 'Modern concurrent programming' },
    { name: 'Ruby', icon: '♦️', description: 'Elegant syntax for web apps' },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      company: 'TechStart',
      image: person1,
      content: 'This compiler changed my workflow completely. I can quickly test ideas without setting up a local environment.',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CS Student',
      company: 'Stanford University',
      image: person3,
      content: 'As a student, having access to this tool helped me learn multiple languages simultaneously without configuration headaches.',
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Lead Developer',
      company: 'Innovate Inc',
      image: person2,
      content: 'The collaboration features let my team work together on coding challenges in real-time. Game changer for interviews!',
    },
  ];

  const features = [
    { icon: '🚀', title: 'Instant Execution', description: 'Run your code with zero setup time' },
    { icon: '📱', title: 'Mobile Ready', description: 'Code from any device, anywhere' },
    { icon: '🔄', title: 'Version Control', description: 'Track changes and revert when needed' },
    { icon: '🔌', title: 'API Integration', description: 'Connect with external services seamlessly' },
    { icon: '👥', title: 'Collaboration', description: 'Share and code together in real-time' },
    { icon: '🛡️', title: 'Secure Environment', description: 'Sandboxed execution for safe testing' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLoginMode ? 'Logging in...' : 'Signing up...', { email, password });
    // Here you would typically handle authentication
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-600">CodeCraft</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/community-forum" className="hover:text-indigo-700 transition-all font-bold">
                Community
              </Link>
              <Link to="/documentation" className="hover:text-indigo-600 transition-all font-bold">
                Documentation
              </Link>
              <button
                onClick={() => {
                  setIsLoginMode(true);
                  setIsModalOpen(true);
                }}
                className="px-4 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsLoginMode(false);
                  setIsModalOpen(true);
                }}
                className="px-4 py-2 text-sm font-medium rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ✅ Modal for Login/SignUp */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50  items-center z-50">
          <div className="flex flex-row justify-center mt-17 bg-white w-fit mx-auto rounded-lg shadow-lg border border-gray-200 ">
          {isLoginMode ? <Login /> : <Signup />} 
            <div className="">
              <button onClick={handleCloseModal} className="text-lg text-black">
                <XCircleIcon className="h-6 w-6" />
              </button>
            </div>
           
          </div>
        </div>
      )}

      <Banner/>
      {/* Hero Section */}
      <section className="pt-10 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Code. Compile.</span>
                <span className="block text-indigo-600">Anywhere.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg">
                A powerful online code compiler that lets you write, test, and debug code in 20+ programming languages. No setup, no downloads—just pure coding.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="mt-3">
                  <Link
                    to="/editor"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10 md:py-3 mb-2"
                  >
                    Try Now
                  </Link>
                </div>
                <div className="mt-3 ml-3">
                  <Link
                    to="/community-forum"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-3 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src={ss}
                    alt="Screenshot of code editor interface"
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center">
                    <button
                      type="button"
                      className="flex items-center justify-center bg-indigo-600 bg-opacity-75 rounded-md text-white px-4 py-2"
                      onClick={() => window.location.to = '/editor'}
                    >
                      <svg className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900">
            Everything you need to code effectively
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            Our platform combines powerful tools with an intuitive interface to make coding a breeze.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {features.map((feature, index) => (
             <CardAnimation key={index} title={feature.title} description={feature.description}/>
          ))}
        </div>
      </div>
    </section>

      {/* Languages Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-xl text-indigo-600 font-semibold tracking-wide uppercase">Languages</h2>
          <p className="mt-2 text-4xl font-bold text-gray-900">
            Supported Programming Languages
          </p>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 mx-auto">
            We support a wide range of languages to meet all your development needs.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {supportedLanguages.map((language, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-white rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden border-2 border-gray-200"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-blue-500"></div>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-xl mb-4 text-3xl shadow-md">
                {language.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{language.name}</h3>
              <p className="mt-3 text-gray-600">{language.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Testimonials */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What Our Users Say
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              <a to="#" className="text-base text-gray-500 hover:text-gray-900">About</a>
            </div>
            <div className="px-5 py-2">
              <a to="#" className="text-base text-gray-500 hover:text-gray-900">Blog</a>
            </div>
            <div className="px-5 py-2">
              <a to="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</a>
            </div>
            <div className="px-5 py-2">
              <a to="#" className="text-base text-gray-500 hover:text-gray-900">Documentation</a>
            </div>
            <div className="px-5 py-2">
              <a to="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a>
            </div>
          </nav>
          <div className="mt-8 flex justify-center space-x-6">
            <a to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a to="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2025 CodeCraft. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;