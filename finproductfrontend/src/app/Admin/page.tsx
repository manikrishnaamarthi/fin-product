'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

const AdminPage = () => {
  const router = useRouter();

  const handleCreateProductClick = () => {
    // Logic for creating a product (navigate to the create product page)
    router.push('/Admin/create-product');
  };

  const handleViewProductsClick = () => {
    // Logic for viewing products (navigate to the view products page)
    router.push('/Admin/view-products');
  };

  const handleViewCustomersClick = () => {
    // Logic for viewing customers (navigate to the view customers page)
    router.push('/Admin/view-customers');
  };
  const handleViewParametersClick = () => {
    // Logic for viewing customers (navigate to the view customers page)
    router.push('/Admin/view-parameters');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">You're in the Admin Page</h1>
      <div className="flex flex-col space-y-4">
        <button
          onClick={handleCreateProductClick}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          Create Product
        </button>
        <button
          onClick={handleViewProductsClick}
          className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition"
        >
          View Products
        </button>
        <button
          onClick={handleViewCustomersClick}
          className="bg-purple-500 text-white font-semibold py-2 px-4 rounded hover:bg-purple-600 transition"
        >
          View Customers
        </button>
        <button
          onClick={handleViewParametersClick}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition"
        >
          View Parameters
        </button>
      </div>
    </div>
  );
};

export default AdminPage;
