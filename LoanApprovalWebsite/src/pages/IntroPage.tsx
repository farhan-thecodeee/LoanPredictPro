import React from 'react';
import { ArrowRight, CheckCircle, PieChart, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const IntroPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Smart Loan Approval Predictions
              </h1>
              <p className="text-xl mb-8">
                Get instant insights on your loan application approval chances with our advanced AI model.
              </p>
              <Link to="/predict" className="inline-flex items-center bg-white text-blue-600 font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-50 transition duration-300">
                Try Now <ArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Loan Approval" 
                className="rounded-lg shadow-2xl w-full max-w-md" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <PieChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our machine learning model analyzes multiple factors to predict loan approval probability with high accuracy.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Instant Results</h3>
              <p className="text-gray-600">
                Get your loan approval prediction immediately after submitting your information.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md transition duration-300 hover:shadow-xl">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is processed securely and never stored after prediction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-4 h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Save Time</h3>
                <p className="text-gray-600">
                  No need to wait for manual application reviews. Get instant predictions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-4 h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Accurate Predictions</h3>
                <p className="text-gray-600">
                  Our model is trained on thousands of real loan decisions for high accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-4 h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Better Preparation</h3>
                <p className="text-gray-600">
                  Understand your approval chances before submitting official applications.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="flex-shrink-0 mr-4 h-6 w-6 text-green-500" />
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">No Credit Impact</h3>
                <p className="text-gray-600">
                  Our predictions don't affect your credit score or leave any record.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/predict" className="inline-flex items-center bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300">
              Check Your Loan Approval Chances <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroPage;