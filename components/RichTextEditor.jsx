"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import apiCall from "@/config/request_handler";

// Dynamically import ReactQuill without SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const RichTextEditor = ({ selectedTemplates }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (selectedTemplates) {
      setContent(selectedTemplates.body);
      setTitle(selectedTemplates.title);
    }
  }, [selectedTemplates]);

  const token = sessionStorage.getItem("authToken");

  console.log("token", token);

  const handleSubmit = async () => {
    try {
      const response = await apiCall({
        url: "/terms/create",
        method: "POST",
        data: {
          title: title,
          type: selectedTemplates.type,
          body: content,
        },
        token: token,
      });

      if (response.status === 200) {
        console.log(response.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      // Reset form fields after submission
      setTitle("");
      setContent("");
    }
  };

  return (
    <div className="editor-container p-4 border rounded-[8px] mt-8 space-y-5 h-full">
      {/* Input for Subject */}
      <input
        type="text"
        placeholder="Subject"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border rounded-[8px] focus:outline-none mb-2 px-3 py-2"
      />

      {/* ReactQuill Editor */}
      <div
        className="quill-container border rounded-[8px] overflow-hidden"
        style={{
          maxHeight: "300px", // Set max height for the editor container
          overflowY: "auto", // Enable scrolling when content exceeds max height
        }}
      >
        <ReactQuill
          value={content}
          onChange={setContent}
          modules={{
            toolbar: [
              ["bold", "italic", "underline", "strike"],
              ["blockquote", "code-block"],
              [{ header: [1, 2, 3, 4, 5, 6, false] }],
              [{ list: "ordered" }, { list: "bullet" }],
              [{ align: [] }],
              ["link", "image"],
            ],
          }}
          placeholder="Write your content here..."
          className="rounded-[8px]"
        />
      </div>

      {/* Buttons */}
      <div className="buttons mt-6 flex space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-transparent border-2 border-blue-500 hover:bg-accent/10 text-accent px-6 py-2 rounded-[8px] shadow-md transition-all duration-200"
        >
          Save
        </button>
        <button className="bg-accent text-white px-6 py-2 rounded-[8px] shadow-md transition-all duration-200">
          Send to Compliance
        </button>
      </div>
    </div>
  );
};

export default RichTextEditor;
