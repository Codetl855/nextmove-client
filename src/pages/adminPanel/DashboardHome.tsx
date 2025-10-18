import Chart from "react-google-charts";
import DashboardCard from "../../components/adminPanel/DashboardCard";
import MiniBarChart from "../../components/adminPanel/MiniBarChart"
import RevenueAnalytics from "../../components/adminPanel/RevenuAnalytics";
import SocialSource from "../../components/adminPanel/SocialSource";
import CustomerVisitByDevice from "../../components/adminPanel/CustomerVisitByDevice";
import MostSalesLocation from "../../components/adminPanel/MostSalesLocation";
import RecentJoinAgencies from "../../components/adminPanel/RecentJoinAgencies";

function DashboardHome() {

    const revenueChartData = [
        ["Day", "Value", { role: "style" }],
        ["S", 100, "color: #be9a4e"],
        ["M", 80, "color: #ccc"],
        ["T", 90, "color: #be9a4e"],
        ["W", 70, "color: #ccc"],
        ["T", 110, "color: #be9a4e"],
        ["F", 60, "color: #ccc"],
        ["S", 120, "color: #be9a4e"],
    ];
    const cards = [
        {
            icon: "icon-[solar--money-bag-broken]",
            title: "Revenue",
            value: "$78.3M",
            percentage: " 8.4%",
            chartData: revenueChartData,
            scale: true
        },
        {
            icon: "icon-[solar--users-group-two-rounded-broken]",
            title: "Reg Agencies",
            value: "$78.3M",
            percentage: " 8.4%",
            chartData: revenueChartData,
            scale : true
        },
        {
            icon: "icon-[solar--money-bag-broken]",
            title: "Customer",
            value: "$78.3M",
            percentage: " 8.4%",
            chartData: revenueChartData,
            scale : true

        },
        {
            icon: "icon-[solar--buildings-2-broken]",
            title: "Number of properties",
            value: "$78.3M",
            percentage: " 8.4%",
            chartData: revenueChartData,
            scale : false

        },
    ];
    // 🔹 Revenue Analytics Line Chart
    const revenueAnalyticsData = [
        ["Month", "Revenue", "No. of Sales"],
        ["Jan", 20000, 15000],
        ["Feb", 25000, 18000],
        ["Mar", 30000, 20000],
        ["Apr", 28000, 21000],
        ["May", 32000, 23000],
        ["Jun", 27000, 19000],
        ["Jul", 34000, 25000],
        ["Aug", 31000, 24000],
        ["Sep", 36000, 26000],
        ["Oct", 40000, 28000],
        ["Nov", 37000, 27000],
        ["Dec", 42000, 30000],
    ];

    const revenueAnalyticsOptions = {
        title: "Revenue Analytics",
        curveType: "function",
        legend: { position: "bottom" },
        colors: ["#34c759", "#fbbf24"], // green + yellow
        chartArea: { width: "85%", height: "70%" },
    };

    // 🔹 Social Source Donut Chart
    const socialSourceData = [
        ["Source", "Percentage"],
        ["Buyers", 25],
        ["Visitors", 35],
        ["Leads", 20],
        ["Views", 20],
    ];

    const socialSourceOptions = {
        title: "Social Source",
        pieHole: 0.6,
        pieSliceText: "none",
        legend: { position: "right" },
        colors: ["#8b5cf6", "#10b981", "#f59e0b", "#3b82f6"],
    };


    return (
        <>
            <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 lg:gap-4">
                {cards.map((card, index) => (
                    <DashboardCard
                        key={index}
                        icon={card.icon}
                        title={card.title}
                        value={card.value}
                        percentage={card.percentage}
                        chartData={card.chartData}
                        up = {card.scale}
                    />
                ))}
            </div>

            {/* 🔹 Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-2">
                {/* Revenue Analytics (Line Chart) */}
                <div className="col-span-2">
                    <RevenueAnalytics />
                </div>
                <div>
                    <SocialSource />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-2">
                
                <CustomerVisitByDevice />
                
                <div className="xl:col-span-2">
                    <MostSalesLocation />
                </div>

                <RecentJoinAgencies />
            </div>
        </>
    )
}
export default DashboardHome