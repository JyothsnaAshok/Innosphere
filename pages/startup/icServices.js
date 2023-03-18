import DashboardLayout from "../../components/DashboardLayout";
import Styles from "../../styles/pages/icServices.module.scss";
import ImgSlider from "@/components/ImgSlider";
import { Space, Table, Tag } from 'antd';
import { Button, Modal } from 'antd';
import { useState } from 'react';

function icServices() {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText('Apply here for services');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
   
  const columns = [
    {
      title: 'Request ID',
      dataIndex: 'Request ID',
      key: 'Request ID',
      width: 50,
    },
    {
      title: 'Past services',
      dataIndex: 'past services',
      key: 'past services',
      width: 150,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      width: 350,
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (_, { tags }) => (  
        <>
          {tags.map((tag) => {
            let color = tag =='pending' ? 'geekblue' : 'green';
            if (tag === 'rejected') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];

  return (
    <>
    <div className={Styles.mainContainer}>
     <DashboardLayout title="Mentorship">
      <div className={Styles.Carousel}>
      <ImgSlider/>
      </div>
      <div className={Styles.apply}>
     <Button type="primary" size="large" style={{backgroundColor:"#c46d36", marginTop:"50px"}}onClick={showModal}>
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
    <Table columns={columns} dataSource={data} />
    </div>
      
     </div>
   </DashboardLayout>

     
    </div>
    </>
  )
}

export default icServices