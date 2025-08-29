import React from 'react';

export default function CreateBomForm() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
      <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Create BOM
          </h3>
        </div>
      </div>
      <form>
        {/* Add form fields here */}
      </form>
    </div>
  );
}
