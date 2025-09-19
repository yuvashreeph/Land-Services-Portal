import React from 'react';
import { FileCheck, MapPin, Monitor } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-8">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Land Services Portal</h1>
          <p className="text-lg text-gray-600">Comprehensive land management solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Claim Land Under FRA Act Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <FileCheck className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Claim land under FRA Act
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Submit your forest rights claim application under the Forest Rights Act
                </p>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                Start Claim Process
              </button>
            </div>
          </div>

          {/* View Map Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <MapPin className="w-10 h-10 text-green-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  View Map
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Interactive map visualization of land parcels and boundaries
                </p>
              </div>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
                Open Map
              </button>
            </div>
          </div>

          {/* Decision Support System Card */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                <Monitor className="w-10 h-10 text-purple-600" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Decision Support System
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  For suggestion of gov schemes based on satellite data and DB data
                </p>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200">
                Access System
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Select Service</h4>
                <p className="text-sm text-gray-600">Choose the service you need from the available options</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Provide Information</h4>
                <p className="text-sm text-gray-600">Fill in the required details and documentation</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Get Results</h4>
                <p className="text-sm text-gray-600">Access your processed application or recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;