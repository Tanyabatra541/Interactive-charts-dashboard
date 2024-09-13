"use client"; // Enable client-side interactions like active link state

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation: React.FC = () => {
  const pathname = usePathname(); // To track the active link

  // Light background with dark text
  const linkStyle =
    "text-gray-800 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200";
  const activeLinkStyle =
    "text-blue-600 px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-gray-800 text-xl font-bold">
            {/* Reference the logo in the public folder */}
            <img
              src="/IconBlack.svg" // Replace with your actual logo file name
              alt="Logo"
              className="h-8 w-8 inline-block mr-2"
            />
            My Charts
          </Link>
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <Link
            href="/candlestick"
            className={
              pathname === "/candlestick" ? activeLinkStyle : linkStyle
            }
          >
            Candlestick Chart
          </Link>
          <Link
            href="/line"
            className={pathname === "/line" ? activeLinkStyle : linkStyle}
          >
            Line Chart
          </Link>
          <Link
            href="/bar"
            className={pathname === "/bar" ? activeLinkStyle : linkStyle}
          >
            Bar Chart
          </Link>
          <Link
            href="/pie"
            className={pathname === "/pie" ? activeLinkStyle : linkStyle}
          >
            Pie Chart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
