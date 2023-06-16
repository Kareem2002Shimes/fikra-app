import React, { FC, Fragment } from "react";
import Navbar from "./Navbar";
import Sidebar from "./sidebar/Sidebar";
import { useSession } from "next-auth/react";
import Loader from "../Loader";

type LayoutProps = {
  children: React.ReactNode | React.ReactNode[];
  t: any;
};
function Layout({ children, t }: LayoutProps) {
  const { status } = useSession();
  if (status === "loading") {
    return <Loader />;
  }
  return (
    <Fragment>
      <Navbar t={t} />
      <main className="flex min-h-fit sm:min-h-screen relative">
        <Sidebar t={t} />
        {children}
      </main>
    </Fragment>
  );
}

export default Layout;
