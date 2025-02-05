import React from "react";

const TemplateTab = () => {
  const terms = [
    "Terms and condition type",
    "Terms and condition type",
    "Terms and condition type",
    "Terms and condition type",
    "Terms and condition type",
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Preset Template</h2>
      <div className="space-y-4">
        {terms.map((term, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-7 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            } rounded-[8px]`}
          >
            <span className="text-base text-gray-700">{term}</span>{" "}
            <button className="bg-accent text-white px-6 py-1 rounded-[6px] hover:bg-blue-600">
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateTab;
