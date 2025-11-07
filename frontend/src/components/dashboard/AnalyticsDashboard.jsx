import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Activity, BarChart3 } from "lucide-react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";

const kpiData = [
  { label: "Total Followers", value: 7731, icon: <Users size={24} /> },
  { label: "Total Engagement Rate", value: "8.1%", icon: <Activity size={24} /> },
  { label: "Avg Posts/Platform", value: 122, icon: <BarChart3 size={24} /> },
  { label: "Active Platforms", value: 4, icon: <TrendingUp size={24} /> },
];

const lineChartData = [
  { date: "Nov 1", followers: 7000 },
  { date: "Nov 2", followers: 7100 },
  { date: "Nov 3", followers: 7200 },
  { date: "Nov 4", followers: 7300 },
  { date: "Nov 5", followers: 7731 },
];

const barChartData = [
  { platform: "Google", engagement: 8.4 },
  { platform: "Facebook", engagement: 6.2 },
  { platform: "Instagram", engagement: 9.1 },
  { platform: "Linkedin", engagement: 7.5 },
];

const KPI = ({ label, value, icon, idx }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    className="bg-neutral-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 p-5 flex flex-col items-start gap-2 min-h-[110px]"
  >
    <div className="flex items-center gap-2 text-gray-400 mb-1">{icon}<span className="text-sm">{label}</span></div>
    <div className="text-2xl font-semibold text-gray-100">{value}</div>
  </motion.div>
);

const LineChartCard = () => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.2 }}
    className="bg-neutral-800 rounded-2xl shadow-md p-6 min-h-[280px]"
  >
    <div className="text-gray-400 text-sm mb-2">Follower Growth</div>
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={lineChartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <XAxis dataKey="date" stroke="#888" fontSize={12} />
        <YAxis stroke="#888" fontSize={12} />
        <Tooltip wrapperClassName="!bg-neutral-900 !text-gray-100 !rounded-lg !shadow-lg" />
        <Line type="monotone" dataKey="followers" stroke="#FFD700" strokeWidth={3} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  </motion.div>
);

const BarChartCard = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: 0.3 }}
    className="bg-neutral-800 rounded-2xl shadow-md p-6 min-h-[280px]"
  >
    <div className="text-gray-400 text-sm mb-2">Engagement Rate by Platform</div>
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={barChartData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
        <XAxis dataKey="platform" stroke="#888" fontSize={12} />
        <YAxis stroke="#888" fontSize={12} />
        <Tooltip wrapperClassName="!bg-neutral-900 !text-gray-100 !rounded-lg !shadow-lg" />
        <Bar dataKey="engagement" fill="#FFD700" radius={[8, 8, 0, 0]} barSize={32} />
        <Legend wrapperStyle={{ color: "#FFD700" }} />
        <CartesianGrid strokeDasharray="3 3" stroke="#222" />
      </BarChart>
    </ResponsiveContainer>
  </motion.div>
);

export const AnalyticsDashboard = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpiData.map((kpi, idx) => (
        <KPI key={kpi.label} {...kpi} idx={idx} />
      ))}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <LineChartCard />
      <BarChartCard />
    </div>
  </div>
);
