"use client";

import { useState } from "react";

const Simplified = () => {
  // State to track the selected term
  const [selectedTerm, setSelectedTerm] = useState(1);

  // Content for the terms
  const termsContent = [
    {
      id: 1,
      title: "1.1 Service term number 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna carta sorta ipsum dolor sit amet...",
    },
    {
      id: 2,
      title: "2.1 Service term number 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna carta sorta ipsum dolor sit amet...",
    },
    {
      id: 3,
      title: "3.1 Service term number 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna carta sorta ipsum dolor sit amet...",
    },
  ];

  return (
    <div className="flex mt-8">
      {/* Sidebar Navigation */}
      <div className="w-1/4  h-[450px] bg-[#f0f4f8] rounded-xl  p-5 mr-4">
        <ul className="space-y-3">
          {termsContent.map((term) => (
            <li
              key={term.id}
              className={`p-2 cursor-pointer rounded-md text-sm font-medium hover:bg-gray-200 `}
            >
              {term.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 bg-white rounded-lg p-6 space-y-4">
        {termsContent.map((term) => (
          <div className="" key={term.id}>
            <h2 className="text-lg font-semibold mb-4">{term.title}</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {term.content}
            </p>
          </div>
        ))}

        <hr className="my-8 border-gray-300" />

        <div className="mt-8 flex justify-start space-x-4">
          <button className="px-6 py-2 w-32 border  border-red-500 text-red-500 rounded-xl hover:bg-red-50">
            Decline
          </button>
          <button className="px-6 py-2 w-32 bg-green-500 text-white rounded-xl hover:bg-green-600">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default Simplified;
