"use client";

import apiCall from "@/config/request_handler";
import React, { useEffect, useState } from "react";

const PublishTabs = () => {
  const [publishedTerms, setPublishedTerms] = useState([]);

  const token = sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchPublish = async () => {
      try {
        const response = await apiCall({
          url: "/terms/published-terms",
          method: "GET",
          token: token,
        });

        if (response.success === true) {
          setPublishedTerms(response.data);
          console.log(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    const debounceFetch = setTimeout(() => {
      fetchPublish();
    }, 500);

    return () => clearTimeout(debounceFetch);
  }, [token]);

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">
        Publish terms and conditions
      </h2>

      <hr className="border-1.5 border-gray-400 my-2 w-full" />

      <div className="space-y-4 mt-6">
        {publishedTerms.map((term, index) => (
          <div
            key={term._id} // Use _id instead of index for better key uniqueness
            className={`flex items-center justify-between p-7 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            } rounded-[8px]`}
          >
            <span className="text-base text-gray-700">{term.title}</span>
            <div className="flex space-x-2">
              <button className="border border-accent text-accent px-6 py-1 rounded-[6px] hover:bg-accent/20">
                View
              </button>
              <button className="bg-accent text-white px-6 py-1 rounded-[6px] hover:bg-blue-600">
                Publish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PublishTabs;
