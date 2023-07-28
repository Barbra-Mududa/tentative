// Catalog.js
import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Layout from '../components/layout/Layout';

const Catalog = () => {
  return (
    <Layout>
      <div className="flex flex-col flex-grow justify-center items-center h-full"> {/* Adjust styles here */}
        <div className='font-lato'>
          <h2 className='text-base font-semibold text-center'>You have no recorde to show</h2>
          <p className='text-sm font-normal text-center'>Add items to your catalog to get started</p>
        </div>
        <button 
          className='w-fit mt-4 px-8 flex items-center  border border-gray-500 border-solid border-opacity-30 rounded-lg p-2 bg-secondary text-white'>
            Get started
            <ArrowRightIcon className='w-4 h-4 ml-4 ' />
        </button>
      </div>
    </Layout>
  );
}

export default Catalog;
