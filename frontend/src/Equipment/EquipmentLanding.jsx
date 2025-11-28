import { Link } from "react-router-dom";
import { useEffect } from "react";
import Headernav from '../Components/Headernav';
import Footer from '../Components/Footer';

export default function EquipmentLanding() {
  useEffect(() => {
    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-white text-slate-900 overflow-x-hidden">
      <Headernav />

      {/* Hero Section */}
      <section className="relative h-[700px] sm:h-[800px] lg:h-[900px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/surfing image generate dark backgorund nice (1).jpg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20"></div>
        </div>

        {/* Animated wave overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path 
              d="M0,120 Q300,80 600,120 T1200,120 L1200,200 L0,200 Z" 
              fill="white" 
              className="animate-wave"
            />
          </svg>
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center px-4 max-w-6xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-4 drop-shadow-2xl tracking-tight">
                <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-gradient leading-tight">
                  Equipment
                </span>
                
              </h1>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 drop-shadow-2xl font-light animate-slide-up max-w-3xl mx-auto leading-relaxed">
              Track, maintain, and manage all surf school equipment in one place
            </p>
            <div className="flex gap-6 justify-center flex-wrap animate-slide-up-delay">
              
              <Link
                to="/Eadd"
                className="px-10 py-4 bg-white/95 hover:bg-white text-blue-600 font-bold rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:scale-110 hover:-translate-y-1 text-lg"
              >
                Add New Request
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20 animate-on-scroll">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-8">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Streamline Your Equipment Management
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              SurfDeck helps streamline surfboard maintenance, wetsuit availability, and safety gear management 
              with smart tracking and automated logs for optimal equipment performance.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll border border-slate-100">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Equipment Tracking</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Real-time visibility into all equipment status, location, and availability across your surf school with detailed usage analytics.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll border border-slate-100" style={{ animationDelay: '0.1s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Maintenance Requests</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Submit and track maintenance requests with automated reminders, status updates, and repair history tracking.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 animate-on-scroll border border-slate-100" style={{ animationDelay: '0.2s' }}>
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-2xl flex items-center justify-center mb-6 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Inventory Status</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                Monitor stock levels, track usage patterns, and receive smart alerts for low inventory and equipment rotation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-20 text-center animate-on-scroll">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Quick Actions
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link
              to="/Eadd"
              className="group bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-blue-500/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-on-scroll border border-blue-400/20"
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Add New Equipment</h3>
              <p className="text-blue-100 text-sm leading-relaxed font-light">Register new equipment to your inventory with detailed specifications</p>
            </Link>

            <Link
              to="/Eadd"
              className="group bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-teal-500/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-on-scroll border border-teal-400/20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Submit Maintenance Request</h3>
              <p className="text-teal-100 text-sm leading-relaxed font-light">Request maintenance for equipment with priority levels</p>
            </Link>

            <Link
              to="/Etable"
              className="group bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-cyan-500/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-on-scroll border border-cyan-400/20"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">View All Equipment</h3>
              <p className="text-cyan-100 text-sm leading-relaxed font-light">Browse and manage all equipment records and status</p>
            </Link>

            <Link
              to="/barchar"
              className="group bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl hover:shadow-indigo-500/40 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 animate-on-scroll border border-indigo-400/20"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Equipment Analytics</h3>
              <p className="text-indigo-100 text-sm leading-relaxed font-light">View usage reports, analytics, and performance metrics</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Categories Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-20 text-center animate-on-scroll">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Equipment Categories
            </span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Link
              to="/Etable"
              className="group bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center animate-on-scroll border border-blue-400/20"
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Surfboards</h3>
              <p className="text-blue-100 text-sm font-light">Beginner, Intermediate, Longboard, Shortboard</p>
            </Link>

            <Link
              to="/Etable"
              className="group bg-gradient-to-br from-cyan-500 via-cyan-600 to-cyan-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center animate-on-scroll border border-cyan-400/20"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Wetsuits</h3>
              <p className="text-cyan-100 text-sm font-light">3/2mm Full Wetsuit - Adult & Kids sizes</p>
            </Link>

            <Link
              to="/Etable"
              className="group bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center animate-on-scroll border border-teal-400/20"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Safety Gear</h3>
              <p className="text-teal-100 text-sm font-light">First Aid Kits, Safety Buoys, Rescue Tubes</p>
            </Link>

            <Link
              to="/Etable"
              className="group bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center animate-on-scroll border border-indigo-400/20"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Accessories</h3>
              <p className="text-indigo-100 text-sm font-light">Leashes, Fins, Wax, Rash Guards, Cameras</p>
            </Link>

            <Link
              to="/Etable"
              className="group bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 rounded-3xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 text-center animate-on-scroll border border-purple-400/20"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 mx-auto transform group-hover:rotate-12 transition-transform duration-300 backdrop-blur-sm">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Storage</h3>
              <p className="text-purple-100 text-sm font-light">Waterproof Bags, Dry Bags, Transport Cases</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Highlights */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-20 text-center animate-on-scroll">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Key Features
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-l-4 border-blue-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-on-scroll border border-slate-100">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center mr-5 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Real-time Status</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-light">Live updates on equipment availability and condition across all locations</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-l-4 border-teal-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-on-scroll border border-slate-100" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center mr-5 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Maintenance Reminders</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-light">Automated alerts and scheduling for equipment maintenance tasks</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-l-4 border-orange-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-on-scroll border border-slate-100" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl flex items-center justify-center mr-5 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Low-stock Alerts</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-light">Smart notifications when inventory runs low with reorder suggestions</p>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 border-l-4 border-purple-500 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 animate-on-scroll border border-slate-100" style={{ animationDelay: '0.3s' }}>
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mr-5 transform hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-800">Repair History</h3>
              </div>
              <p className="text-slate-600 leading-relaxed font-light">Complete maintenance and repair tracking with cost analysis</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-30px); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        .animate-slide-up {
          animation: slideUp 1s ease-out 0.3s both;
        }
        .animate-slide-up-delay {
          animation: slideUp 1s ease-out 0.6s both;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-gradient-delay {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite 0.5s;
        }
        .animate-wave {
          animation: wave 3s ease-in-out infinite;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .animate-fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}