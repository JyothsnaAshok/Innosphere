import React from "react";
import DashboardLayout from "../../components/StudentDash";
import { Button, Card, Row } from "antd";
const { Meta } = Card;
import { Input } from "antd";

const { TextArea } = Input;
function feedback() {
  return (
    <>
      <DashboardLayout>
        <Row style={{ width: "80%", margin: "auto" }}>
         
          <div>
          <Card
            hoverable
            style={{
                height: "40vh",
              width: 240,
              margin: "20px",
            }}
            cover={
              <img
                alt="example"
                src="/logos/1.svg"
                style={{margin:"auto",marginTop:"1rem", width: "80%"}}
              />
            }
          >
            <Meta title="Baylink" description={
                <div>

                "we help brands get offline and create omni channel "
                <TextArea rows={4} placeholder="Enter the feedback" maxLength={250} style={{marginTop:"2px",  background: "#f0f0f065", border: "none"}} />
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button style={{margin:"4px",marginTop:"1rem", alignItems:"center" , justifyContent:"center",color:"aliceblue" , backgroundColor:"#c46d36"}}>
                Submit
                </Button>
                </div>
                
                </div>
                }>
           
            <br />
            <br />
            </Meta>
         
          </Card>
          </div>

          <div>
          <Card
            hoverable
            style={{
                height: "40vh",
              width: 240,
              margin: "20px",
            }}
            cover={
              <img
                alt="example"
                src="/logos/2.svg"
                style={{margin:"auto",marginTop:"1rem", width: "80%"}}
              />
            }
          >
            <Meta title="Bugbase" description={
                <div>

                "we help brands get offline and create omni channel "
                <TextArea rows={4} placeholder="Enter the feedback" maxLength={250} style={{marginTop:"2px",  background: "#f0f0f065", border: "none"}} />
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button style={{margin:"4px",marginTop:"1rem", alignItems:"center" , justifyContent:"center",color:"aliceblue" , backgroundColor:"#c46d36"}}>
                Submit
                </Button>
                </div>
                
                </div>
                }>
           
            <br />
            <br />
            </Meta>
         
          </Card>
          </div>

          <div>
          <Card
            hoverable
            style={{
                height: "40vh",
              width: 240,
              margin: "20px",
            }}
            cover={
              <img
                alt="example"
                src="/logos/3.png"
                style={{margin:"auto",marginTop:"1rem", width: "80%"}}
              />
            }
          >
            <Meta title="B.F technologies" description={
                <div>

                "we help brands get offline and create omni channel "
                <TextArea rows={4} placeholder="Enter the feedback" maxLength={250} style={{marginTop:"2px",  background: "#f0f0f065", border: "none"}} />
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button style={{margin:"4px",marginTop:"1rem", alignItems:"center" , justifyContent:"center",color:"aliceblue" , backgroundColor:"#c46d36"}}>
                Submit
                </Button>
                </div>
                
                </div>
                }>
           
            <br />
            <br />
            </Meta>
         
          </Card>
          </div>

          <div>
          <Card
            hoverable
            style={{
              height: "40vh",
              width: 240,
              margin: "20px",
              overflow: "auto",
            }}
            cover={
              <img
                alt="example"
                src="/logos/4.png"
                style={{margin:"auto",marginTop:"1rem", width: "80%"}}
              />
            }
          >
            <Meta title="EduHunt" description={
                <div>

                "we help brands get offline and create omni channel "
                <TextArea rows={4} placeholder="Enter the feedback" maxLength={250} style={{marginTop:"2px",  background: "#f0f0f065", border: "none"}} />
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button style={{margin:"4px",marginTop:"1rem", alignItems:"center" , justifyContent:"center",color:"aliceblue" , backgroundColor:"#c46d36"}}>
                Submit
                </Button>
                </div>
                
                </div>
                }>
           
            <br />
            <br />
            </Meta>
         
          </Card>
          </div>

          <div>
          <Card
            hoverable
            style={{
                height: "40vh",
              width: 240,
              margin: "20px",
            }}
            cover={
              <img
                alt="example"
                src="/logos/5.png"
                style={{margin:"auto",marginTop:"1rem", width: "80%"}}
              />
            }
          >
            <Meta title="Fundinc" description={
                <div>

                "we help brands get offline and create omni channel "
                <TextArea  rows={4} placeholder="Enter the feedback" maxLength={250} style={{marginTop:"2px", background: "#f0f0f065", border: "none"}} />
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button style={{margin:"4px",marginTop:"1rem", alignItems:"center" , justifyContent:"center",color:"aliceblue" , backgroundColor:"#c46d36"}}>
                Submit
                </Button>
                </div>
                
                </div>
                }>
           
            <br />
            <br />
            </Meta>
         
          </Card>
          </div>
          <div>
          <Card
            hoverable
            style={{
              width: 240,
              height: "40vh",
              margin: "20px",
            }}
            cover={
              <img
                alt="example"
                src="/logos/6.png"
                style={{margin:"auto",marginTop:"1rem", width: "80%"}}
              />
            }
          >
            <Meta title="Zenefit" description={
                <div>

                "we help brands get offline and create omni channel "
                <TextArea rows={4} placeholder="Enter the feedback" maxLength={250} style={{marginTop:"2px",  background: "#f0f0f065", border: "none"}} />
                <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Button style={{margin:"4px",marginTop:"1rem", alignItems:"center" , justifyContent:"center",color:"aliceblue" , backgroundColor:"#c46d36"}}>
                Submit
                </Button>
                </div>
                
                </div>
                }>
           
            <br />
            <br />
            </Meta>
         
          </Card>
          </div>
        </Row>
      </DashboardLayout>
    </>
  );
}

export default feedback;
