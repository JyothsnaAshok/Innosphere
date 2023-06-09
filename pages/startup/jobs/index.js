import { Button, Form, Input, message, Modal, Tag } from "antd";
import Head from "next/head";
import Image from "next/image";
import DashboardLayout from "components/DashboardLayout";
import Styles from "styles/pages/hire.module.scss";
import { Divider, List, Typography } from "antd";
import {
  AiFillPlusCircle,
  AiOutlinePlus,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { useState } from "react";
import { getPastHiring, postJobHiring } from "@/services/auth.service";
import { useQuery, useMutation, useQueryClient } from "react-query";
import moment from "moment";
import { useRouter } from "next/router";

export default function Hire() {
  const queryClient = useQueryClient();

  const router = useRouter();

  const {
    data: pastJobs,
    isLoading,
    isError,
  } = useQuery("pastHiring", getPastHiring);

  const jobPostMuation = useMutation(postJobHiring, {
    onSuccess: () => {
      setOpen(false);
      setConfirmLoading(false);
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  const onJobPost = async (values) => {
    await jobPostMuation.mutateAsync(values);
    await queryClient.invalidateQueries("pastHiring");
  };

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];
  console.log(pastJobs);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title="Hiring">
        <div className={Styles.container}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              color: "#000",
              fontSize: "1.8rem",
              marginBottom: "2rem",
            }}
          >
            Open Jobs
            <Button
              type="primary"
              onClick={() => {
                setOpen(true);
              }}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Post a Job
              <AiOutlinePlus style={{ marginLeft: "0.5rem" }} />
            </Button>
          </div>
          <List
            size="large"
            split={false}
            dataSource={pastJobs?.pastHiring}
            renderItem={(item) => (
              <>
                <List.Item
                  onClick={() => router.push(`/startup/jobs/${item.post_id}`)}
                  style={{
                    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.1)",
                    margin: "1rem 0",
                  }}
                >
                  <List.Item.Meta
                    title={
                      <h1>
                        {item.role}
                        {/* // moment time in our time zone*/}
                        <span
                          style={{
                            color: "#12121256",
                            fontSize: "0.7rem",
                            marginLeft: "0.5rem",
                          }}
                        >
                          {moment(item.date_time).fromNow()}
                        </span>
                      </h1>
                    }
                    description={item.description}
                  />
                  <Tag color="blue">{item.dept}</Tag>
                </List.Item>
              </>
            )}
          />
        </div>
        <Modal open={open} footer={false} onCancel={() => setOpen(false)}>
          <h2>Post a job opening</h2>
          <Form
            onFinish={onJobPost}
            layout="vertical"
            style={{
              marginTop: "2rem",
            }}
          >
            <Form.Item name="role" label="Job Title">
              <Input size="large" placeholder="Job Title"></Input>
            </Form.Item>
            <Form.Item name="description" label="Job Description">
              <Input.TextArea
                size="large"
                placeholder="Job Description"
              ></Input.TextArea>
            </Form.Item>
            <Form.Item name="dept" label="Department">
              <Input size="large" placeholder="Department"></Input>
            </Form.Item>

            <Form.Item
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                size="large"
                type="primary"
                htmlType="submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </DashboardLayout>
    </div>
  );
}
