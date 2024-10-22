"use client";

import React, { useState } from 'react';
import {toast, Toaster} from 'react-hot-toast';

export default function UploadFile() {
    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);

    // Handle file selection when clicked
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile && validateFileType(selectedFile)) {
            setFile(selectedFile);
            console.log('File selected:', selectedFile);
        } else {
            showErrorToast("Please upload a valid image file (jpg, png, gif).");
        }
    };

    // Validate if file is an image
    const validateFileType = (file: File) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        return allowedTypes.includes(file.type);
    };

    // Handle drag and drop
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        setDragActive(false);
        const droppedFile = event.dataTransfer.files[0];
        if (droppedFile && validateFileType(droppedFile)) {
            setFile(droppedFile);
            console.log('File dropped:', droppedFile);
        } else {
            showErrorToast("Please upload a valid image file (jpg, png, gif).");
        }
    };

    // Trigger file input when box is clicked
    const handleClick = () => {
        document.getElementById('file-input')?.click();
    };

    // Show error toast using react-hot-toast
    const showErrorToast = (message: string) => {
        toast.error(message);
    };

    return (
        <div>
            <div
                className={`w-full border-2 ${dragActive ? 'border-blue-400 bg-blue-50' : 'border-dashed border-gray-300'} flex flex-col justify-center items-center p-6 my-5 rounded-lg transition-colors cursor-pointer`}
                onClick={handleClick}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    id="file-input"
                    type="file"
                    className="hidden"
                    accept="image/jpeg, image/png, image/gif"
                    onChange={handleFileChange}
                />
                <svg
                    className="w-16 h-16 text-gray-500 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 16l9-9m0 0l9 9m-9-9v12"
                    ></path>
                </svg>
                <span className="font-medium text-gray-600">
                    {file ? `Selected File: ${file.name}` : 'Click to upload or drag and drop files here'}
                </span>
            </div>
            {/* React hot toast notifications */}
            <div>
                <Toaster />
            </div>
        </div>
    );
}
