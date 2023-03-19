import React from "react";
import DashboardLayout from "../../components/StudentDash";
import Styles from "../../styles/pages/mentorship.module.scss";
import { Space, Table, Tag, Typography, ellipsis } from "antd";
import { useQuery } from "react-query";
import { getMentorDetails } from "@/services/auth.service";

const { Paragraph } = Typography;

function cofounder() {
  const { data: mentorDetails, isLoading } = useQuery(
    "mentorDetails",
    getMentorDetails
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mail",
      dataIndex: "mail",
      key: "mail",
    },
    {
      title: "LinkedIn",
      dataIndex: "linked_in",
      key: "linked_in",
    },
    {
      title: "About",
      dataIndex: "about",
      key: "about",
      width: 300,
      // render with ... in the end
      render: (text) => (
        <Paragraph
          ellipsis={{
            rows: 2,
            expandable: true,
            symbol: "more",
          }}
        >
          {text}
        </Paragraph>
      ),
    },
    {
      title: "Sectors",
      key: "sector",
      dataIndex: "sector",
      render: (_, { tags }) => (
        <>
          {/* {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "health") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })} */}
        </>
      ),
    },
  ];
  
  return (
    <DashboardLayout title="Mentorship">
      <div className={Styles.tableContainer}>
        <Table
          // add max 10 rows
          pagination={{ pageSize: 5 }}
          columns={columns}
          dataSource={mentorDetails}
        />
        ;
      </div>
    </DashboardLayout>
  );
}

export default cofounder;
