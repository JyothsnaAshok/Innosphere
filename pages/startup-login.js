import Styles from "../styles/pages/startups1.module.scss";
import { Form, Image, Input, Row, Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { login } from "../store/user.slice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "react-query";
import { startupLoginRequest } from "@/services/auth.service";

function Startup_login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const loginMutation = useMutation(startupLoginRequest, {
    onSuccess: (data) => {
      console.log(data);
      if (data.success === 1) {
        dispatch(login(data));
        router.push("/startup");
        localStorage.setItem("token", data.token);
      } else {
        message.error("Invalid credentials");
      }
    },
    onError: (error) => {
      console.log(error);
      message.error("Something went wrong");
    },
  });

  const onLoginSubmit = async (values) => {
    console.log(values);
    try {
      await loginMutation.mutateAsync(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={Styles.main_signup1}>
        <div className={Styles.one}>
          <Image src="Signup_img.jpeg" alt="Sign-up img" preview={false} />
        </div>
        <div className={Styles.two}>
          <div className={Styles.signupForm}>
            <div className={Styles.subTitle}>STARTUP LOGIN</div>
            <div className={Styles.title}>Welcome !</div>
            <Form layout="vertical" onFinish={onLoginSubmit}>
              <Row>
                <Form.Item
                  name="username"
                  label="Username"
                  style={{ marginRight: "1rem", width: "100%" }}
                >
                  <Input size="large" placeholder="Username"></Input>
                </Form.Item>
              </Row>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ width: "97%" }}
              >
                <Input.Password size="large" />
              </Form.Item>

              <Button htmlType="submit" className={Styles.register}>
                Login
              </Button>
              <div className={Styles.regLink}>
                Didn't register your startup?{" "}
                <a style={{ color: "#C46D36" }} href="/startup-signup">
                  Register
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Startup_login;
