"use client";

import { useState } from "react";

const Comprehensive = () => {
  // State to track the selected term
  const [selectedTerm, setSelectedTerm] = useState(1);

  // Content for the terms
  const termsContent = [
    {
      id: 1,
      title: "1.1 Service term number 1",
      content:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,",
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
      <div className="w-1/4 h-[450px] bg-[#f0f4f8] rounded-xl  p-5 mr-4">
        <ul className="space-y-3">
          {termsContent.map((term) => (
            <li
              key={term.id}
              className={`p-2 cursor-pointer rounded-md text-sm font-medium hover:bg-gray-200 ${
                selectedTerm === term.id ? "bg-gray-300 font-semibold" : ""
              }`}
              onClick={() => setSelectedTerm(term.id)}
            >
              {term.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="w-3/4 bg-white rounded-lg p-6 space-y-4">
        <h2 className="text-lg font-semibold mb-4">
          {termsContent.find((term) => term.id === selectedTerm).title}
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          {termsContent.find((term) => term.id === selectedTerm).content}
        </p>

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

export default Comprehensive;
