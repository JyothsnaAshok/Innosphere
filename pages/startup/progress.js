import Styles from "styles/pages/progress.module.scss";
import DashboardLayout from "../../components/DashboardLayout";
import { Button, Form, Input, message, Radio, Timeline } from "antd";
import { useState } from "react";
import { addUpdate, getUpdates } from "@/services/auth.service";
import { useQueryClient, useQuery, useMutation } from "react-query";

function Progress() {
  const queryClient = useQueryClient();
  const [mode, setMode] = useState("left");
  const onChange = (e) => {
    setMode(e.target.value);
  };

  const { data, isLoading, isError } = useQuery("updates", getUpdates);

  const addUpdateMutation = useMutation(addUpdate, {
    onSuccess: () => {
      message.success("Update added successfully");
    },
    onError: () => {
      message.error("Something went wrong");
    },
  });
  const onAddUpdate = async (values) => {
    await addUpdateMutation.mutateAsync(values);
    await queryClient.invalidateQueries("updates");
  };

  return (
    <div className={Styles.mainContainer}>
      <DashboardLayout title="Progress">
        <Timeline
          items={[
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              children: "Solve initial network problems 2015-09-01",
            },
            {
              children: "Technical testing 2015-09-01",
            },
            {
              children: "Network problems being solved 2015-09-01",
            },
          ]}
        />
        {/* <div className={Styles.addProgress}>
          <Form layout="vertical" onFinish={onAddUpdate}>
            <Form.Item label="Add Progress" name="message">
              <Input.TextArea
                size="large"
                placeholder="Add Progress"
              ></Input.TextArea>
            </Form.Item>
            <Form.Item>
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
        </div> */}
      </DashboardLayout>
    </div>
  );
}

export default Progress;
