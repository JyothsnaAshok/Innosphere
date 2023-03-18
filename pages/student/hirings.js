import DashboardLayout from "../../components/StudentDash";
import React from "react";
import { Avatar, List, Icon, Button} from "antd";
import { getAllHirings} from "@/services/auth.service";
import { useQuery } from "react-query";

function hirings() {
  const { data, isLoading, isError } = useQuery("hirings", getAllHirings);
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
      <List.Item actions={[<Button style={{backgroundColor:"#c46d36" , color:"aliceblue" , borderRadius:"5px"}}key="list-loadmore-edit">Apply</Button>]}>
        <List.Item.Meta
          avatar={<Avatar src={`https://joesch.moe/api/v1/random?key=${index}`} />}
          title={<a>{item.role}</a>}
          description={item.description}
        />
      </List.Item>
    )}
  />
      </DashboardLayout>
    </div>
  );
}

export default hirings;
