import Styles from "../styles/pages/startups1.module.scss";
import { Form, Image, Input, Row, Upload,Button,Checkbox ,Select} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
function Student_signup() {
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };

  return (
    <div>
      <div className={Styles.main_signup1}>
        <div className={Styles.one}>
          <Image src="Student_reg.jpeg" alt="Sign-up img" preview={false} />
        </div>
        <div className={Styles.two}>
          <div className={Styles.signupForm}>
            <div className={Styles.subTitle}>STUDENT SIGNUP</div>
            <div className={Styles.title}>Welcome Aboard</div>
           <Form layout="vertical">
            <Row>
              <Form.Item label="Name" style={{marginRight: "1rem", width: "47%"}}>
                <Input size="large" placeholder="Name"></Input>
              </Form.Item>
              <Form.Item label="Reg no." style={{ width: "47%"}}>
                <Input size="large" placeholder="Registration Number"></Input>
              </Form.Item>
              </Row>
              <Row>
              <Form.Item label="Email" style={{marginRight: "1rem", width: "100%"}}>
                <Input size="large" placeholder="Email Address"></Input>
              </Form.Item>
              </Row>
              <Row>
              
              <Form.Item label="College" style={{marginRight: "1rem", width: "47%"}}>
                <Input size="large" placeholder="Which college?"></Input>
              </Form.Item>

              <Form.Item label="Year" style={{marginRight: "1rem", width: "47%"}}>
              <Select  
                    placeholder="Select year"
                    allowClear size="large" style={{ marginRight: "2rem", width: "100%" }}
                  >
                    <Option value="L0">1st year </Option>
                    <Option value="L1">2nd year</Option>
                    <Option value="L2">3rd year</Option>
                    <Option value="L3">4th year</Option>
                
                  </Select>
              </Form.Item>

              </Row>
        
              <Form.Item label="Resume Link" style={{marginRight: "1rem", width: "97%"}}>
                <Input size="large" placeholder="Resume link"></Input>
              </Form.Item>
             
              <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ] 
                }
                  style={{marginRight: "1rem", width: "97%" }}
                
                >
                  <Input.Password size="large" style={{ marginRight: "2rem", width: "100%" }}/>
                </Form.Item>
          
              <Checkbox style={{marginTop: "20px", color: "aliceblue"}} onChange={onChange}>Are you interested in finding a Co-founder?</Checkbox>
            
                <Button className={Styles.register2}>Register</Button>
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

export default Student_signup;
