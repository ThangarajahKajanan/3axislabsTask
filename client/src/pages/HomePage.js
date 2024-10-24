import React from 'react'

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-3xl md:text-4xl text-center font-bold text-gray-700 mb-4">
                Welcome to the Attendance System!
            </h1>
            <button
                onClick={" "}
                className="px-12 py-3 mt-4 lg:mt-10 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-500"
            >
                Logout
            </button>
    </div>
  )
}

export default HomePage