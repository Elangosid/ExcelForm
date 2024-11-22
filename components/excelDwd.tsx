"use client";
import React from "react";
import axios from "axios";


const ExcelDownload: React.FC = () => {
    const handleDownload = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/generate-excel", {
                responseType: "blob",
            });

            const link = document.createElement("a");
            const fileURL = window.URL.createObjectURL(new Blob([response.data]));
            link.href = fileURL;
            link.setAttribute("download", "users.xlsx");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            alert("Error downloading the Excel file");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Generate Excel</h2>
            <button
                onClick={handleDownload}
                className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200"
            >
                Download Excel
            </button>
        </div>
    );
};

export default ExcelDownload;
