import DashboardLayout from "../../components/DashboardLayout";
import Styles from "../../styles/pages/icServices.module.scss";
import ImgSlider from "@/components/ImgSlider";
import { Space, Table, Tag } from "antd";
import { Button, Modal } from "antd";
import { useState } from "react";
import { getServices } from "@/services/auth.service";
import { useQuery } from "react-query";

export default function IcServices() {
  const { data, isLoading, isError } = useQuery("services", getServices);
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

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
            <Modal
              title="Title"
              open={open}
              onOk={handleOk}
              confirmLoading={confirmLoading}
              onCancel={handleCancel}
            >
              <p>{modalText}</p>
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
