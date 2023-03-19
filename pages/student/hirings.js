import DashboardLayout from "../../components/StudentDash";
import React from "react";
import { Avatar, List, Icon, Button,Modal,Form, Input,message} from "antd";
import { getAllHirings} from "@/services/auth.service";
import { useState } from "react";
import { postApply } from "@/services/auth.service";
import { useQuery, useMutation, useQueryClient } from "react-query";

function Hirings() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery("hirings", getAllHirings);
  const [open, setOpen] = useState(false);
  const [postId, setPostId] = useState(0);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");

  const applyPostMuation = useMutation(postApply, {
    onSuccess: (response) => {
      console.log(response);
      setOpen(false);
      setConfirmLoading(false);
      response === "success" ? message.success("Applied") : message.error("Already Applied") ;

    },
    onError: () => {
      message.error("Something went wrong");
    },
  });

  const onJobPost = async (values) => {
    console.log(values);
    const finalObj = {
      ...values,
      post_id: postId
    };
    console.log(finalObj);
    await applyPostMuation.mutateAsync(finalObj);
    await queryClient.invalidateQueries("hirings");
  };

  
    // const data = [
    //     {
    //       title: 'Front End developed',
    //     },
    //     {
    //       title: 'Finance Intern',
    //     },
    //     {
    //       title: 'Product Intern',
    //     },
    //     {
    //       title: 'Marketing Manager',
    //     },
    //     {
    //         title: 'Front End developed',
    //       },
    //       {
    //         title: 'Finance Intern',
    //       },
    //       {
    //         title: 'Product Intern',
    //       },
    //       {
    //         title: 'Marketing Manager',
    //       },
    //       {
    //         title: 'Front End developed',
    //       },
    //       {
    //         title: 'Finance Intern',
    //       },
    //       {
    //         title: 'Product Intern',
    //       },
    //       {
    //         title: 'Marketing Manager',
    //       },
    //   ];
    console.log(data);
  return (
    <div>
      <DashboardLayout>
      <List
    itemLayout="horizontal"
    dataSource={data?.result}
    style={{margin:"30px"}}
    
    renderItem={(item, index) => (
      <List.Item actions={[<Button type="primary"
      onClick={() => {
        setOpen(true);
        setPostId(item.post_id);

      }}
      style={{backgroundColor:"#c46d36" , color:"aliceblue" , borderRadius:"5px"}}key="list-loadmore-edit">Apply</Button>]}>
        <List.Item.Meta
          avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
          title={<a>{item.role}</a>}
          description={item.description}
        />
      </List.Item>
      
    )}
  />
        <Modal open={open} footer={false} onCancel={() => setOpen(false)}>
          <h2>Apply for the job</h2>
          <Form
            onFinish={onJobPost}
            layout="vertical"
            style={{
              marginTop: "2rem",
            }}
          >
            <Form.Item name="cv_link" label="CV Link">
              <Input size="large" placeholder="Name"></Input>
            </Form.Item>
            <Form.Item name="description" label="why are you fit for this role ?">
              <Input.TextArea
                size="large"
                placeholder="Why are you fit for the job? "
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
      </DashboardLayout>
    </div>
  );
}

export default Hirings;
