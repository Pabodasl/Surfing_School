import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Eqnav from "./Eqnav";

// Predefined equipment list
const EQUIPMENT_LIST = [
  "Beginner Foam Surfboard (8'0\")",
  "Intermediate Soft-Top Surfboard (7'6\")",
  "Longboard Surfboard (9'0\")",
  "Performance Shortboard (6'2\")",
  "Bodyboard – Kids/Youth",
  "Paddleboard (SUP)",
  "3/2mm Full Wetsuit – Adult",
  "3/2mm Full Wetsuit – Kids",
  "Rash Guards – All Sizes",
  "Surfboard Leash (6ft)",
  "Surfboard Leash (7ft)",
  "Surfboard Fins – Tri Fin Set",
  "Surfboard Wax – Warm Water",
  "First Aid Kit – Beach Session",
  "Safety Buoy / Rescue Tube",
  "Instructor Soft-Top Board (Premium)",
  "GoPro Waterproof Camera",
  "Waterproof Storage Bag (Dry Bag)"
];

export default function supplierAdd() {
  const [formData, setFormData] = useState({});
  const [publishError, setPublishError] = useState(null);
  const [dateError, setDateError] = useState(null);
  const { upId } = useParams();
  const navigate = useNavigate();

  // Get today's date in YYYY-MM-DD format for min attribute
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    try {
      const fetchE = async () => {
        const res = await fetch(
          `http://localhost:5009/api/equiment/getAll?upId=${upId}`
        );
        const data = await res.json();

        if (!res.ok) {
          console.log(data.message);
          setPublishError(data.message);
          return;
        }
        if (res.ok) {
          const selectedE = data.equipment.find(
            (Employe) => Employe._id === upId
          );
          if (selectedE) {
            setFormData(selectedE);
          }
        }
      };
      fetchE();
    } catch (error) {
      console.log(error.message);
    }
  }, [upId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate date is not in the past
    if (formData.Reqdata) {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(formData.Reqdata);
      selectedDate.setHours(0, 0, 0, 0);
      
      if (selectedDate < today) {
        setDateError("Please select today or a future date. Past dates are not allowed.");
        return;
      }
    }
    
    try {
      const res = await fetch(`http://localhost:5009/api/equiment/Euip/${formData._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) {
        setPublishError(data.message);
        return;
      }

      if (res.ok) {
        setPublishError(null);
        alert("Update successful!");
        navigate("/Etable");
      }
    } catch (error) {
      setPublishError("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Eqnav />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="mb-8">
          <Link to={`/Etable`} className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Equipment List
          </Link>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Update Equipment Request</h1>
          <p className="text-gray-600">Modify equipment request details</p>
        </div>

        {/* Form Card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Equipment Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Equipment Name <span className="text-red-500">*</span>
                </label>
                <select
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  value={formData.name || ''}
                  required
                >
                  <option value="">Select equipment...</option>
                  {/* Show existing equipment name if it's not in the predefined list */}
                  {formData.name && !EQUIPMENT_LIST.includes(formData.name) && (
                    <option value={formData.name}>
                      {formData.name} (Current)
                    </option>
                  )}
                  {EQUIPMENT_LIST.map((equipment, index) => (
                    <option key={index} value={equipment}>
                      {equipment}
                    </option>
                  ))}
                </select>
                <p className="mt-2 text-sm text-gray-500">Select from the predefined equipment list</p>
              </div>

              {/* Required Date */}
              <div>
                <label htmlFor="Reqdata" className="block text-sm font-semibold text-gray-700 mb-2">
                  Required Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="Reqdata"
                  min={getTodayDate()}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${
                    dateError ? 'border-red-500' : 'border-gray-300'
                  }`}
                  onChange={(e) => {
                    const date = e.target.value.trim();
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    if (date) {
                      const selectedDate = new Date(date);
                      selectedDate.setHours(0, 0, 0, 0);
                      
                      if (selectedDate < today) {
                        setDateError("Please select today or a future date. Past dates are not allowed.");
                        setFormData({ ...formData, Reqdata: '' });
                        return;
                      }
                      setDateError(null);
                    }
                    setFormData({ ...formData, Reqdata: date });
                  }}
                  value={formData.Reqdata || ''}
                  required
                />
                {dateError && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    {dateError}
                  </p>
                )}
                <p className="mt-2 text-sm text-gray-500">Only today and future dates are allowed</p>
              </div>

              {/* Maintenance Task */}
              <div>
                <label htmlFor="Task" className="block text-sm font-semibold text-gray-700 mb-2">
                  Maintenance Task <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="Task"
                  rows="4"
                  placeholder="Describe the maintenance task..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  onChange={(e) => setFormData({ ...formData, Task: e.target.value })}
                  value={formData.Task || ''}
                  required
                />
              </div>

              {/* Quantity and Fund Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Item Quantity */}
                <div>
                  <label htmlFor="Quantity" className="block text-sm font-semibold text-gray-700 mb-2">
                    Item Quantity <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="Quantity"
                    placeholder="Enter positive number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    onChange={(e) => setFormData({ ...formData, Quantity: e.target.value })}
                    value={formData.Quantity || ''}
                    required
                  />
                  <p className="mt-2 text-sm text-gray-500">Enter a positive number</p>
                </div>

                {/* Available Fund */}
                <div>
                  <label htmlFor="fund" className="block text-sm font-semibold text-gray-700 mb-2">
                    Available Fund <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="text"
                      id="fund"
                      placeholder="Enter positive number"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      onChange={(e) => setFormData({ ...formData, fund: e.target.value })}
                      value={formData.fund || ''}
                      required
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Enter a positive number</p>
                </div>
              </div>

              {/* Error Message */}
              {publishError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-600 text-sm flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    {publishError}
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Update Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
