import React from 'react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-9999">
      <div className="flex flex-col gap-3">
        <button className="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
        <button className="flex items-center justify-center w-12 h-12 text-white bg-purple-500 rounded-full shadow-lg hover:bg-purple-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1m0-16a7 7 0 11-7 7h14a7 7 0 01-7-7z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
