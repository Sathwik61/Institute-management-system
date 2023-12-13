import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerHosteller } from '../../../redux/hosteller/hostellerHandle';

import axios from 'axios';
const AddHosteller = () => {
  const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [rollNum, setRollNum] = useState('');
    const [password, setPassword] = useState('');
    const [hostelName, setHostelName] = useState('');
  
    // State variables for handling loading and errors
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [loader, setLoader] = useState(false)
    const userState = useSelector(state => state.user);
    const { status, currentUser, response } = userState;
    
    const adminID = currentUser._id
    const role = "Hosteller"
    const fields = { name, rollNum, password, hostelName}

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoader(true)
        dispatch(registerHosteller(fields, role))
 
    }
    return (
        <>
        <div className="container mx-auto p-4">
      <form className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Hostel Student</h2>

        {/* Display error message if there is an error */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Form fields */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Roll Number</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={rollNum}
            onChange={(e) => setRollNum(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            type="password"
            className="w-full border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Hostel Name</label>
          <input
            type="text"
            className="w-full border p-2 rounded"
            value={hostelName}
            onChange={(e) => setHostelName(e.target.value)}
            required
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'Adding...' : 'Add Hostel Student'}
        </button>
      </form>
    </div>     
        </>
    )
}

export default AddHosteller