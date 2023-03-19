import DashboardLayout from "../../components/DashboardLayout";
import Styles from "../../styles/pages/icServices.module.scss";
import ImgSlider from "@/components/ImgSlider";
import { DatePicker, Form, Input, Space, Table, Tag } from "antd";
import { Button, Modal } from "antd";
import { useState } from "react";
import { getServices } from "@/services/auth.service";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { postServices } from "@/services/auth.service";

export default function IcServices() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("services", getServices);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const servicePostMutation = useMutation(postServices, {
    onSuccess: () => {
      setOpen(false);
      setConfirmLoading(false);
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });
  const onServicePost = async (values) => {
    await servicePostMutation.mutateAsync(values);
    await queryClient.invalidateQueries("pastServices");
  };

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("Apply here for services");
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  console.log(data);
  const columns = [
    {
      title: "Request ID",
      dataIndex: "service_id",
      key: "service_id",
      width: 50,
    },
    {
      title: "Date & Time",
      dataIndex: "date_time",
      key: "date_time",
      width: 150,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: 350,
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (record) => (
        <>
          <Tag color={record?.status == null ? "blue" : "red"}>
            {record?.status === null ? "Approved" : "Pending"}
          </Tag>
        </>
      ),
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];

  return (
    <>
      <div className={Styles.mainContainer}>
        <DashboardLayout title="Services">
          <div className={Styles.Carousel}>
            <ImgSlider />
          </div>
          <div className={Styles.apply}>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#c46d36", marginTop: "50px" }}
              onClick={showModal}
            >
              Apply for services
            </Button>
            <Modal open={open} footer={false} onCancel={() => setOpen(false)}>
              <h2>Request for a Service</h2>
              <Form
                onFinish={onServicePost}
                layout="vertical"
                style={{
                  marginTop: "2rem",
                }}
              >
                <Form.Item name="date_time" label="Date and time">
                  <Space direction="vertical">
                    <DatePicker />
                  </Space>
                </Form.Item>
                <Form.Item name="description" label="Description">
                  <Input.TextArea
                    size="large"
                    placeholder="Description"
                  ></Input.TextArea>
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
            <div className={Styles.pastServices}>
              <Table columns={columns} dataSource={data?.serviceHistory} />
            </div>
          </div>
        </DashboardLayout>
      </div>
    </>
  );
}
