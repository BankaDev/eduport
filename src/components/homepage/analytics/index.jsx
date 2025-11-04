import { useState } from "react";

const Analytics = () => {
  const menus = [
    { title: "Online Courses", icon: "fa fa-graduation-cap", label: "10K+", background: "bg-blue-100", text: "text-blue-500" },
    { title: "Active Students", icon: "fa fa-users", label: "5.2K", background: "bg-green-100", text: "text-green-500" },
    { title: "Total Instructors", icon: "fa fa-chalkboard-teacher", label: "350", background: "bg-purple-100", text: "text-purple-500" },
    { title: "Revenue", icon: "fa fa-dollar-sign", label: "$120K", background: "bg-yellow-100", text: "text-yellow-500" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {menus.map((menu, index) => (
        <div
          key={index}
          className="flex items-center p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          {/* Icon Circle */}
          <div className={`p-4 mr-4 rounded-full ${menu.background} ${menu.text}`}>
            <i className={`${menu.icon} text-xl`}></i>
          </div>

          {/* Text Info */}
          <div>
            <p className="text-sm font-medium text-gray-500">{menu.title}</p>
            <p className="text-2xl font-bold text-gray-800">{menu.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Analytics;
