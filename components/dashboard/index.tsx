
import Sidebar from "../sidebar/index";
import Header from "../header/index";
import Table from "../table";

export default function Dashboard() {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1">
                <Header />
                <main className="p-4 bg-gray-50 h-full">
                    <Table />
                </main>
            </div>
        </div>
    );
}
