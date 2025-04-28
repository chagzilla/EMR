import React from "react";
import { MdDashboard, MdGroups } from "react-icons/md";
import { GrFormSchedule } from "react-icons/gr";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { HiDocumentReport } from "react-icons/hi";
import { MdOutlineSettings } from "react-icons/md";
import Link from "next/link";
import { FiSettings } from "react-icons/fi";

const SideNav = () => {
  return (
    <section className="h-screen">
      <div className="w-56 overflow-hidden min-h-screen bg-teal-700">
        {/* Nav */}
        <nav className="h-full">
          <ul className="pt-24 pl-3 text-slate-100 font-semibold">
            <li>
              <Link href="/" className="flex items-center">
                <span className="icon">
                  <MdDashboard size={20} />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/users" className="flex items-center">
                <span className="icon">
                  <MdGroups size={20} />
                </span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link href="/appointments" className="flex items-center">
                <span className="icon">
                  <GrFormSchedule size={20} />
                </span>
                <span>Appointments</span>
              </Link>
            </li>
            <li>
              <Link href="/visits" className="flex items-center">
                <span className="icon">
                  <FaMoneyBillTrendUp size={20} />
                </span>
                <span>Billing</span>
              </Link>
            </li>
            <li>
              <Link href="/reports" className="flex items-center">
                <span className="icon">
                  <HiDocumentReport size={20} />
                </span>
                <span>Reports</span>
              </Link>
            </li>
            <li>
              <Link href="/settings" className="flex items-center">
                <span className="icon">
                  <FiSettings size={20} />
                </span>
                <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SideNav;
