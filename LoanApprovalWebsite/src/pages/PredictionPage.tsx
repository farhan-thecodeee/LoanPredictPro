import React, { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface FormData {
  Gender: string;
  Married: string;
  Dependents: string;
  Education: string;
  Self_Employed: string;
  ApplicantIncome: number;
  CoapplicantIncome: number;
  LoanAmount: number;
  Loan_Amount_Term: number;
  Credit_History: number;
  Property_Area: string;
}

interface PredictionResult {
  approved: boolean;
  probability: number;
}

const initialFormData: FormData = {
  Gender: 'Male',
  Married: 'No',
  Dependents: '0',
  Education: 'Graduate',
  Self_Employed: 'No',
  ApplicantIncome: 5000,
  CoapplicantIncome: 0,
  LoanAmount: 100,
  Loan_Amount_Term: 360,
  Credit_History: 1,
  Property_Area: 'Urban',
};

const PredictionPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Handle numeric values
    if (['ApplicantIncome', 'CoapplicantIncome', 'LoanAmount', 'Loan_Amount_Term', 'Credit_History'].includes(name)) {
      setFormData({
        ...formData,
        [name]: parseFloat(value) || 0
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Simulate API call to model
    setTimeout(() => {
      try {
        // Calculate prediction probability using a simple algorithm
        // This would be replaced by the actual model prediction in a real implementation
        const positiveFactors = [
          formData.Credit_History === 1 ? 0.4 : 0,
          formData.Education === 'Graduate' ? 0.1 : 0,
          formData.Property_Area === 'Urban' ? 0.07 : (formData.Property_Area === 'Semiurban' ? 0.05 : 0),
          formData.ApplicantIncome > 5000 ? 0.1 : (formData.ApplicantIncome > 3000 ? 0.05 : 0),
          formData.Married === 'Yes' ? 0.03 : 0,
          formData.Loan_Amount_Term >= 360 ? 0.05 : 0,
          formData.LoanAmount < (formData.ApplicantIncome / 30) ? 0.1 : 0,
          formData.Self_Employed === 'Yes' ? 0.02 : 0,
        ];
        
        // Calculate total probability
        const probability = positiveFactors.reduce((sum, factor) => sum + factor, 0.3);
        const cappedProbability = Math.min(Math.max(probability, 0.1), 0.95);
        const approved = cappedProbability > 0.55;
        
        setPrediction({
          approved,
          probability: parseFloat(cappedProbability.toFixed(2)),
        });
        
        setLoading(false);
      } catch (err) {
        setError('Error making prediction. Please check your inputs and try again.');
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Loan Approval Prediction</h1>
        <p className="text-lg text-gray-600">
          Fill out the form below to predict your loan approval chances.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Loan Application Form</h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Personal Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select 
                    name="Gender"
                    value={formData.Gender}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
                  <select 
                    name="Married"
                    value={formData.Married}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dependents</label>
                  <select 
                    name="Dependents"
                    value={formData.Dependents}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3+">3+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Education</label>
                  <select 
                    name="Education"
                    value={formData.Education}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Graduate">Graduate</option>
                    <option value="Not Graduate">Not Graduate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Self Employed</label>
                  <select 
                    name="Self_Employed"
                    value={formData.Self_Employed}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Property Area</label>
                  <select 
                    name="Property_Area"
                    value={formData.Property_Area}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Urban">Urban</option>
                    <option value="Semiurban">Semiurban</option>
                    <option value="Rural">Rural</option>
                  </select>
                </div>

                {/* Financial Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Applicant Income</label>
                  <input 
                    type="number" 
                    name="ApplicantIncome"
                    value={formData.ApplicantIncome}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Co-applicant Income</label>
                  <input 
                    type="number" 
                    name="CoapplicantIncome"
                    value={formData.CoapplicantIncome}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount (in thousands)</label>
                  <input 
                    type="number" 
                    name="LoanAmount"
                    value={formData.LoanAmount}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Loan Amount Term (in months)</label>
                  <input 
                    type="number" 
                    name="Loan_Amount_Term"
                    value={formData.Loan_Amount_Term}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Credit History (1=Good, 0=Bad)</label>
                  <select 
                    name="Credit_History"
                    value={formData.Credit_History}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={1}>Good (1)</option>
                    <option value={0}>Bad (0)</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  type="submit" 
                  disabled={loading}
                  className={`w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium ${loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} transition duration-200`}
                >
                  {loading ? 'Processing...' : 'Predict Loan Approval'}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Prediction Result</h2>
            
            {prediction ? (
              <div>
                <div className={`p-4 rounded-lg mb-6 ${prediction.approved ? 'bg-green-50' : 'bg-red-50'}`}>
                  <div className="flex items-center mb-4">
                    {prediction.approved ? (
                      <CheckCircle className="h-10 w-10 text-green-500 mr-3" />
                    ) : (
                      <XCircle className="h-10 w-10 text-red-500 mr-3" />
                    )}
                    <h3 className={`text-xl font-bold ${prediction.approved ? 'text-green-700' : 'text-red-700'}`}>
                      {prediction.approved ? 'Approved' : 'Not Approved'}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Our model predicts that your loan has a <span className="font-bold">{(prediction.probability * 100).toFixed(0)}%</span> chance of approval.
                  </p>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${prediction.approved ? 'bg-green-600' : 'bg-red-600'}`} 
                      style={{width: `${prediction.probability * 100}%`}}
                    ></div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-medium text-gray-800 mb-3">Key Factors:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600 text-sm">Credit History: {formData.Credit_History === 1 ? 'Good' : 'Bad'}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600 text-sm">Income: ${formData.ApplicantIncome.toLocaleString()}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600 text-sm">Loan Amount: ${formData.LoanAmount.toLocaleString()}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600 text-sm">Education: {formData.Education}</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-6">
                  <button 
                    onClick={() => setPrediction(null)} 
                    className="w-full border border-blue-600 text-blue-600 py-2 px-4 rounded-md font-medium hover:bg-blue-50 transition duration-200"
                  >
                    Reset Prediction
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <AlertCircle className="h-12 w-12 text-gray-400 mb-4" />
                <p className="text-gray-500 mb-2">No prediction yet</p>
                <p className="text-sm text-gray-400">Fill out the form and click the predict button to see results</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionPage;