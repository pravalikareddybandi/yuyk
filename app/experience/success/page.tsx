"use client";
import React from 'react';
import { useRouter } from "next/navigation";


const ThankYouPage = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="max-w-2xl w-full flex mt-[-250px]">
        <div>
        <h1 className="text-5xl font-bold text-navy-900 mb-2">Thank You!</h1>
        <p className="text-xl text-gray-700 mb-6">You have just successfully published your expirence list</p>
        
        <p className="text-lg text-gray-700 mb-4">What you want to do next?</p>
        
        <div className="flex space-x-4 mb-8">
          {/* <button className="px-6 py-2 border border-orange-300 text-orange-500 rounded hover:bg-orange-100 transition duration-300">
            Go back home
          </button> */}
          <button className="px-6 py-2 bg-orange-400 text-white rounded hover:bg-orange-500 transition duration-300" onClick={()=>{
            router.push("/");
          }}>
Go to Home          </button>
        </div>
        </div>
        
        <div className="relative">
          <img src="/girlsteps.png" alt="Person climbing stairs" className="w-80 h-auto ml-auto" />
          
          
        </div>
        
      </div>
    </div>
  );
};

export default ThankYouPage;