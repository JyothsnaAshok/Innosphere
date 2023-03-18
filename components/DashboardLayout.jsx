import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Styles from "../styles/components/Sidebar.module.scss";
import { BiUserCircle } from "react-icons/bi";
import { MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineLineChart, AiOutlineMail } from "react-icons/ai";

import {
  Avatar,
  Breadcrumb,
  Layout,
  Menu,
  Row,
  Badge,
  Dropdown,
  Space,
  Divider,
  DatePicker,
  message,
} from "antd";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  DownOutlined,
  BellOutlined,
  HomeOutlined,
  AppstoreOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const navItems = [
  getItem(<Link href="/startup">Dashboard</Link>, "/startup", <HomeOutlined />),
  getItem(
    <Link href="/startup/icServices">IC Services</Link>,
    "/startup/icServices",
    <MdMiscellaneousServices />
  ),
  getItem(
    <Link href="/startup/mentorship">Mentorship</Link>,
    "/startup/mentorship",
    <AppstoreOutlined />
  ),
  getItem(
    <Link href="/startup/jobs">Hire Talent</Link>,
    "/startup/jobs",
    <TeamOutlined />
  ),
  getItem(
    <Link href="/startup/feedback">Feedback</Link>,
    "/startup/feedback",
    <AiOutlineMail />
  ),
  getItem(
    <Link href="/startup/progress">Progress</Link>,
    "/startup/progress",
    <AiOutlineLineChart />
  ),
];

export default function DashboardLayout({ children, title }) {
  const [collapsed, setCollapsed] = useState(false);

  const router = useRouter();
  const { pathname } = router;
  const mainPath = pathname.split("/")[1];
  console.log(mainPath);

  // split the path with "/" and join it back to remove the "/"
  const path = pathname.split("/").join("/");
  console.log(path);

  // check if the path is the same as the link, the apply active style else apply inactive style
  const isActive = (link) => {
    if (link === path) {
      return Styles.active;
    } else {
      return Styles.inactive;
    }
  };
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <div className={Styles.sidebarItems}>
        <Sider
          width={250}
          collapsible
          collapsed={collapsed}
          breakpoint="xl"
          onCollapse={(value) => setCollapsed(value)}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            background: "rgba(26, 26, 26, 1)",
          }}
        >
          <div
            style={{
              height: 32,
              margin: 16,
              color: "#000",
              fontSize: "2rem",
              fontFamily: "Poppins",
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
              padding: "2rem 0",
              borderBottom: "1px solid #f0f0f0",
            }}
          >
            <Image src="/logo.png" alt="logo" width={40} height={40} />
            {!collapsed && (
              <span
                style={{
                  marginLeft: "0.5rem",
                  fontSize: "1.4rem",
                  color: "white",
                }}
              >
                Innosphere
              </span>
            )}
          </div>

          <Menu
            defaultSelectedKeys={[path]}
            selectedKeys={[path]}
            defaultOpenKeys={[mainPath]}
            mode="inline"
            items={navItems}
          />
        </Sider>
      </div>
      <Layout className="site-layout">
        <Content
          style={{
            marginLeft: collapsed ? 80 : 210,
            color: "#000",
            background: "#F9F9FE",
          }}
        >
          <div
            style={{
              padding: 40,
              display: "flex",
              flexDirection: "column",
              minHeight: 360,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
