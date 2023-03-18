import React from "react";
import DashboardLayout from "../../components/DashboardLayout";
import Styles from "../../styles/pages/mentorship.module.scss";
import { Space, Table, Tag, Typography, ellipsis } from "antd";
import { useQuery } from "react-query";
import { getMentorDetails } from "@/services/auth.service";

const { Paragraph } = Typography;

function Mentorship() {
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
  const data = [
    {
      key: "1",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["tech", "finance"],
    },
    {
      key: "2",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["health"],
    },
    {
      key: "3",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["tech", "finance"],
    },
    {
      key: "4",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["health"],
    },
    {
      key: "5",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["tech", "finance"],
    },
    {
      key: "6",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["health"],
    },
    {
      key: "7",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["health"],
    },
    {
      key: "8",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["tech", "finance"],
    },
    {
      key: "9",
      name: "Sakshat Gandhi",
      mail: "sakshatgandhi14@gmail.com",
      linkedIn: "https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/",
      tags: ["health"],
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

export default Mentorship;
