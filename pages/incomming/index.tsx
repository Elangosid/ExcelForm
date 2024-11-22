import ExcelDownload from "@/components/excelDwd";
import ExcelForm from "@/form/excelForm";

export const IncommingPage = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
            <h1 className="text-4xl font-semibold text-center mb-8 text-gray-800">
                User Data Management
            </h1>
            <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                        Save User
                    </h2>
                    <ExcelForm />
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                   
                    <ExcelDownload />
                </div>
            </div>
        </div>
    );
};
