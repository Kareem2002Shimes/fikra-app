import React, { FC, Fragment } from "react";
import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
};
function Layout({ children }: LayoutProps) {
  return (
    <Fragment>
      <Navbar />
      <main className="flex h-[calc(100vh-81px)]">
        <Sidebar />
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;
