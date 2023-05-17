import React, { FC, Fragment } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  t: any;
};
function Layout({ children, t }: LayoutProps) {
  return (
    <Fragment>
      <Navbar t={t} />
      <main className="flex">
        <Sidebar t={t} />
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;
