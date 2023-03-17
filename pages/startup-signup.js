import Styles from "../styles/pages/startups1.module.scss";
import { Form, Image, Input, Row, Upload, Button, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

function Startup_signup() {
  return (
    <div>
      <div className={Styles.main_signup1}>
        <div className={Styles.one}>
          <Image src="Signup_img.jpeg" alt="Sign-up img" preview={false} />
        </div>
        <div className={Styles.two}>
          <div className={Styles.signupForm}>
            <div className={Styles.subTitle}>STARTUP SIGNUP</div>
            <div className={Styles.title}>Welcome Aboard</div>
            <Form layout="vertical">
              <Row>
                <Form.Item
                  label="Name"
                  style={{ marginRight: "1rem", width: "47%" }}
                >
                  <Input size="large" placeholder="Startup Name"></Input>
                </Form.Item>

                <Form.Item label="Domain" style={{ width: "47%" }}>
                  <Input size="large" placeholder="Enter Domain"></Input>
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  label="Email"
                  style={{ marginRight: "1rem", width: "100%" }}
                >
                  <Input size="large" placeholder="Email Address"></Input>
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  label="Website"
                  style={{ marginRight: "1rem", width: "100%" }}
                >
                  <Input size="large" placeholder="Website link"></Input>
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  label="Description"
                  style={{ marginRight: "1rem", width: "100%", height: "200%" }}
                >
                  <Input
                    showCount
                    maxLength={200}
                    size="large"
                    placeholder="Write your startup's description in about 200 words"
                  ></Input>
                </Form.Item>
              </Row>
              <Row>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ] 
                }
                  style={{marginRight: "1rem", width: "47%" }}
                
                >
                  <Input.Password size="large" style={{ marginRight: "2rem", width: "100%" }}/>
                </Form.Item>

                <Form.Item
                  label="Level"
                  style={{ marginRight: "1rem", width: "47%" }}
                >
                  <Select  
                    placeholder="Select a option and change input text above"
                    allowClear size="large" style={{ marginRight: "2rem", width: "100%" }}
                  >
                    <Option value="L0">L0 - Ideation </Option>
                    <Option value="L1">L1 - Idea Validation</Option>
                    <Option value="L2">L2 - MVP ("ugly" prototype)</Option>
                    <Option value="L3">L3 - Large Scale MVP</Option>
                    <Option value="L4">L4 - Revenue Generating</Option>
                    <Option value="L5">L5 - Funded</Option>
                  </Select>
                </Form.Item>

              </Row>

              <Upload style={{ marginRight: "1rem", width: "100%" }}>
                <Button
                  icon={<UploadOutlined />}
                  style={{ width: "228%", marginTop: "27px" }}
                >
                  Click to Upload Startup logo
                </Button>
              </Upload>

              <Button className={Styles.register}>Register</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup_signup;
