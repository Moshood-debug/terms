"use client";

import React, { useState, useEffect } from "react";
import RichTextEditor from "../RichTextEditor";
import apiCall from "@/config/request_handler";

const CreateTab = () => {
  const [template, setTemplate] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Store the selected template object
  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        const response = await apiCall({
          url: "/template/fetch",
          method: "GET",
          token: token,
        });

        if (response.success === true) {
          setTemplate(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchTemplate();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [token]);

  const handleTemplateSelect = (item) => {
    if (selectedTemplate?._id === item._id) {
      // If the clicked template is already selected, deselect it
      setSelectedTemplate(null);
    } else {
      // Otherwise, select the new template
      setSelectedTemplate(item);
    }
  };

  console.log("selectedTemplate", selectedTemplate);

  return (
    <div className="">
      <h1 className="text-lg text-gray-500 font-medium">
        Create Term and Condition
      </h1>
      <hr className=" border-1.5  border-gray-400 my-2 w-full" />
      <p className="text-sm mt-4 text-gray-500">
        Kindly select the application to personalize document.
      </p>
      <div className="flex flex-wrap items-center gap-3">
        {template.map((item) => (
          <div className="flex items-center mt-4" key={item._id}>
            <input
              type="checkbox"
              id={`template-${item._id}`}
              className="hidden peer"
              checked={selectedTemplate?._id === item._id} // Bind checked state to the selected template
              onChange={() => handleTemplateSelect(item)} // Handle checkbox change
            />
            <label
              htmlFor={`template-${item._id}`}
              className={`cursor-pointer px-4 py-2 bg-transparent border border-accent text-accent text-sm font-medium rounded-full shadow hover:bg-accent-hover peer-checked:bg-accent peer-checked:text-white transition-all duration-200 ${
                selectedTemplate?._id === item._id ? "bg-accent text-white" : ""
              }`}
            >
              {item.industry}
            </label>
          </div>
        ))}
      </div>
      <RichTextEditor selectedTemplates={selectedTemplate} />{" "}
      {/* Pass the selected template object */}
    </div>
  );
};

export default CreateTab;
