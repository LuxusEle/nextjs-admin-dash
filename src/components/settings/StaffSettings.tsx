import React from 'react';
import UserControlSettings from './UserControlSettings';

export default function StaffSettings() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Staff Settings
          </h3>
        </div>
      </div>
      <form>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label
              htmlFor="staffName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Staff Name
            </label>
            <input
              type="text"
              id="staffName"
              name="staffName"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="staffEmail"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Staff Email
            </label>
            <input
              type="email"
              id="staffEmail"
              name="staffEmail"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Staff
          </button>
        </div>
      </form>
      <UserControlSettings />
    </div>
  );
}
