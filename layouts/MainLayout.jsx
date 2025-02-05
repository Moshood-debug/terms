"use client";

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";

export default function MainLayout({ children }) {
  return (
    <Layout>
      <Content className=" font-lato h-full">
        {" "}
        <NavBar />
        {children}
        <Footer />
      </Content>
    </Layout>
  );
}
