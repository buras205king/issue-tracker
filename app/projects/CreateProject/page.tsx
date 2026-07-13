'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
export default function CreateProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ title: '', description: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Handle form submission (e.g., API call)
    console.log('Project Data:', formData);
    
    // Redirect back to the projects page after submission
    router.push('/projects');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-gray-8xl text-black">Create New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Project Title</label>
          <input
            type="text"
            required
            className="bg-blue-100 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            required
            rows={4}
            className="bg-blue-100 mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-black"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}