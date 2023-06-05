import BarGraph from "../components/BarGraph";
import Footer from "../components/Footer";
import LineChartComponent from "../components/LineChartComponent";
import Navbar from "../components/Navbar";
import PieChartComponent from "../components/PieChartComponent";

const Dashboard = () => {
    return (
        <>
        <Navbar/>
            <div className="bg-blue-900 h-10 text-white text-center">News ticker</div>
            <div className="bg-black p-5">
                <h1 className="text-4xl font-bold text-white text-center">Hi John Doe!</h1>

                <div className="flex justify-center gap-5 m-5 font-mono bg-slate-900 rounded-md shadow-md shadow-inner shadow-slate-500">

                    <div className=" h-64 m-5 rounded shadow-lg overflow-y-auto bg-green-700 shadow-sm shadow-white">
                        <h3 className="text-center text-2xl bg-gray-50 m-2 p-3 ">Income Transactions</h3>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-white dark:text-gray-400">
                                
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-4 py-2">Date</th>
                                        <th className="px-4 py-2">Amount</th>
                                        <th className="px-4 py-2">Description</th>
                                        <th className="px-4 py-2">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">12-03-2023</td>
                                        <td className="border px-4 py-2">1000</td>
                                        <td className="border px-4 py-2">Salary</td>
                                        <td className="border px-4 py-2">1000</td>
                                    </tr>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">15-03-2023</td>
                                        <td className="border px-4 py-2">400</td>
                                        <td className="border px-4 py-2">Gift</td>
                                        <td className="border px-4 py-2">1400</td>
                                    </tr>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-green-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className=" flex items-center justify-center">
                        <button className="rounded-l-2xl bg-white w-12 h-9 text-center border-r-2 border-slate-300 hover:bg-green-400 hover:text-white">+</button>
                        <button className="rounded-r-2xl bg-white w-12 h-9 text-center border-l-2 border-slate-300 hover:bg-red-400 hover:text-white">-</button>
                    </div>

                    <div className="h-64 m-5 rounded shadow-lg overflow-y-auto bg-red-700 shadow-sm shadow-white">
                        <h3 className="text-center text-2xl bg-gray-50 m-2 p-3 ">Expense Transactions</h3>
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left text-white dark:text-gray-400">
                                
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th className="px-4 py-2">Date</th>
                                        <th className="px-4 py-2">Amount</th>
                                        <th className="px-4 py-2">Description</th>
                                        <th className="px-4 py-2">Balance</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">12-03-2023</td>
                                        <td className="border px-4 py-2">1000</td>
                                        <td className="border px-4 py-2">Salary</td>
                                        <td className="border px-4 py-2">1000</td>
                                    </tr>
                                    <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">15-03-2023</td>
                                        <td className="border px-4 py-2">400</td>
                                        <td className="border px-4 py-2">Gift</td>
                                        <td className="border px-4 py-2">1400</td>
                                    </tr>
                                    <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                    <tr className="hover:bg-red-600 transition-colors">
                                        <td className="border px-4 py-2">23-03-2023</td>
                                        <td className="border px-4 py-2">300</td>
                                        <td className="border px-4 py-2">Refund</td>
                                        <td className="border px-4 py-2">1700</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center m-5 bg-slate-900 rounded-md shadow-md shadow-inner shadow-slate-500">
                
                <div style={{ width: '100%', height: '20rem' }}>
                    <BarGraph/>
                </div>

                <div style={{ width: '100%', height: '20rem' }}>
                    <PieChartComponent/>
                </div>

                <div style={{ width: '100%', height: '20rem' }}>
                    <LineChartComponent/>
                </div>


                </div>
                
            </div>
            <Footer/>
        </>
    )
}
export default Dashboard;