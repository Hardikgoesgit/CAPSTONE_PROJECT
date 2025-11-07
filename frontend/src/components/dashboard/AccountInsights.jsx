import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Users, Facebook, Instagram, Linkedin, Google } from "lucide-react";

const platformIcons = {
  Google: <Google size={28} className="text-[#4285F4]" />,
  Facebook: <Facebook size={28} className="text-[#1877F3]" />,
  Instagram: <Instagram size={28} className="text-[#E4405F]" />,
  Linkedin: <Linkedin size={28} className="text-[#0A66C2]" />,
};

const insights = [
  { platform: "Google", followers: 2431, posts: 145, engagement: 8.4, likesPerPost: 134, lastSync: "2h ago" },
  { platform: "Facebook", followers: 980, posts: 56, engagement: 6.2, likesPerPost: 23, lastSync: "1d ago" },
  { platform: "Instagram", followers: 3120, posts: 210, engagement: 9.1, likesPerPost: 201, lastSync: "3h ago" },
  { platform: "Linkedin", followers: 1200, posts: 80, engagement: 7.5, likesPerPost: 56, lastSync: "5h ago" },
];

export const AccountInsights = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {insights.map((item, idx) => (
      <motion.div
        key={item.platform}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        className="bg-neutral-800 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 hover:ring-2 hover:ring-[#FFD700]/30 transition-all duration-200 p-6 flex flex-col gap-4 min-h-[220px]"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {platformIcons[item.platform] || <Users size={28} />}
            <span className="text-lg font-semibold text-gray-100">{item.platform}</span>
          </div>
          <Badge variant="secondary" className="bg-neutral-700 text-xs text-gray-400 px-2 py-1 rounded-full">
            Last synced {item.lastSync}
          </Badge>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-2">
          <div>
            <div className="text-sm text-gray-400">Followers</div>
            <div className="text-2xl font-semibold text-gray-100">{item.followers}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Posts</div>
            <div className="text-2xl font-semibold text-gray-100">{item.posts}</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Engagement</div>
            <div className="text-2xl font-semibold text-gray-100">{item.engagement}%</div>
          </div>
          <div>
            <div className="text-sm text-gray-400">Avg Likes/Post</div>
            <div className="text-2xl font-semibold text-gray-100">{item.likesPerPost}</div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);
