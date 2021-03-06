import React from "react";
import { Layout } from "antd";
import SideNav from "../SideNav";

const { Content } = Layout;

const AppLayout = ({ children }) => {
	return (
		<Layout style={{ minHeight: "100vh", overflow: "auto" }}>
			<SideNav />
			<Layout>
				<Content style={{ padding: "2%" }}>{children}</Content>
			</Layout>
		</Layout>
	);
};

export default AppLayout;
