// "use client";

// import React, { useState, useEffect } from "react";
// import { Menu } from "antd";
// import Image from "next/image";
// import Link from "next/link";
// import { Power } from "lucide-react";
// import { usePathname } from "next/navigation";
// import {
//   IconDashboard,
//   IconUserCircle,
//   IconCalendarDollar,
//   IconUsers,
//   IconLogout,
//   IconSettings,
// } from "@tabler/icons-react";
// import { MdCurrencyExchange } from "react-icons/md";

// const AppSideMenu = () => {
//   const pathname = usePathname();
//   const [selectedKey, setSelectedKey] = useState("1");

//   useEffect(() => {
//     if (pathname === "/") {
//       setSelectedKey("1");
//     } else if (pathname === "/users") {
//       setSelectedKey("2");
//     } else if (pathname === "/transaction") {
//       setSelectedKey("3");
//     } else if (pathname === "/profiles") {
//       setSelectedKey("4");
//     } else if (pathname === "/settings") {
//       setSelectedKey("5");
//     }
//   }, [pathname]);

//   const menuItems = [
//     {
//       label: (
//         <Link href="/" prefetch={true}>
//           Dashboard
//         </Link>
//       ),
//       key: "1",
//       icon: <IconDashboard stroke={2} />,
//     },
//     {
//       label: (
//         <Link href="/users" prefetch={true}>
//           Users
//         </Link>
//       ),
//       key: "2",
//       icon: <IconUsers stroke={3} />,
//     },
//     {
//       label: (
//         <Link href="/transaction" prefetch={true}>
//           Transaction
//         </Link>
//       ),
//       key: "3",
//       icon: <IconCalendarDollar stroke={2} />,
//     },
//     {
//       label: (
//         <Link href="/profiles" prefetch={true}>
//           Profiles
//         </Link>
//       ),
//       key: "4",
//       icon: <IconUserCircle stroke={2} />,
//     },
//     {
//       label: (
//         <Link href="/rates" prefetch={true}>
//           Rate management
//         </Link>
//       ),
//       key: "5",
//       icon: <MdCurrencyExchange size={20} stroke={2} />,
//     },
//     {
//       label: (
//         <Link href="/settings" prefetch={true}>
//           Settings
//         </Link>
//       ),
//       key: "6",
//       icon: <IconSettings stroke={2} />,
//     },
//   ];

//   return (
//     <div className="flex flex-col bg-[#0841c7]/10 w-full max-w-[250px] h-screen  mx-auto lg:mx-0">
//       <div className="flex items-center justify-center h-16 px-7 mb-9">
//         <div className="bg-white p-3 flex gap-3 shadow rounded-[8px] items-center">
//           <div className="">
//             <div className="w-10 h-10 rounded-full  overflow-hidden">
//               <Image
//                 src="/img/profile.jpg"
//                 alt="User Avatar"
//                 width={50}
//                 height={50}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>

//           <div className="">
//             <p className="m-0 text-md font-medium">First name</p>
//             <p className="m-0 text-md font-normal">Second name</p>
//           </div>
//         </div>
//       </div>

//       <div className="flex-1  overflow-y-auto px-4">
//         <Menu
//           theme="dark"
//           mode="inline"
//           selectedKeys={[selectedKey]}
//           items={menuItems}
//           className="!bg-accent text-white  custom-menu"
//         />
//       </div>

//       <div className="flex items-center justify-center space-x-2 py-4 mb-8">
//         <button className="text-white hover:text-gray-300 flex items-center gap-2">
//           <span>
//             <IconLogout stroke={2} />
//           </span>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AppSideMenu;
