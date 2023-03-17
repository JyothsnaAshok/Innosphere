import Styles from "../styles/pages/startups1.module.scss";
import { Form, Image, Input, Row, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function Student_login() {
  return (
    <div>
      <div className={Styles.main_signup1}>
        <div className={Styles.one}>
          <Image src="Signup_img.jpeg" alt="Sign-up img" preview={false} />
        </div>
        <div className={Styles.two}>
          <div className={Styles.signupForm}>
            <div className={Styles.subTitle}>STUDENT LOGIN</div>
            <div className={Styles.title}>Welcome Back!</div>
            <Form layout="vertical">
           
              <Row>
                <Form.Item
                  label="Registration no."
                  style={{ marginRight: "1rem", width: "100%" }}
                >
                  <Input size="large" placeholder="Registration number"></Input>
                </Form.Item>
              </Row>
              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ] 
                }
                  style={{ width: "97%" }}
                
                >
                  <Input.Password size="large" />
                </Form.Item>

              <Button className={Styles.register}>Login</Button>
              <div className={Styles.regLink}>
              Didn't register your startup? <a style={{color: "#C46D36"}} href="/startup-signup">Register</a>
              </div>
            </Form>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_login;
