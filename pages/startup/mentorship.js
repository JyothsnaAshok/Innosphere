import React from 'react'
import DashboardLayout from "../../components/DashboardLayout";
import Styles from "../../styles/pages/mentorship.module.scss";
import { Space, Table, Tag } from 'antd';

function Mentorship() {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          
        },
        {
          title: 'Mail',
          dataIndex: 'mail',
          key: 'mail',
        },
        {
          title: 'LinkedIn',
          dataIndex: 'linkedIn',
          key: 'linkedIn',
        },
        {
          title: 'Sectors',
          key: 'sectors',
          dataIndex: 'sectors',
          render: (_, { tags }) => (
            <>
              {tags.map((tag) => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'health') {
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
          name: 'Sakshat Gandhi',
          mail: 'sakshatgandhi14@gmail.com',
          linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
          tags: ['tech', 'finance'],
        },
        {
          key: '2',
          name: 'Sakshat Gandhi',
          mail: 'sakshatgandhi14@gmail.com',
          linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
          tags: ['health'],
        },
        {
          key: '3',
          name: 'Sakshat Gandhi',
          mail: 'sakshatgandhi14@gmail.com',
          linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
          tags: ['tech', 'finance'],
        },
        {
            key: '4',
            name: 'Sakshat Gandhi',
            mail: 'sakshatgandhi14@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
            tags: ['health'],
          },
          {
            key: '5',
            name: 'Sakshat Gandhi',
            mail: 'sakshatgandhi14@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
            tags: ['tech', 'finance'],
          },
          {
            key: '6',
            name: 'Sakshat Gandhi',
            mail: 'sakshatgandhi14@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
            tags: ['health'],
          },
          {
            key: '7',
            name: 'Sakshat Gandhi',
            mail: 'sakshatgandhi14@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
            tags: ['health'],
          },
          {
            key: '8',
            name: 'Sakshat Gandhi',
            mail: 'sakshatgandhi14@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
            tags: ['tech', 'finance'],
          },
          {
            key: '9',
            name: 'Sakshat Gandhi',
            mail: 'sakshatgandhi14@gmail.com',
            linkedIn: 'https://www.linkedin.com/in/sakshat-gandhi-09035b1a1/',
             tags: ['health'],
          },
      ];
  return (
   <DashboardLayout title="Mentorship">
       <div className={Styles.tableContainer}>

       <Table columns={columns} dataSource={data} />;
       </div>
   </DashboardLayout>
  )
}

export default Mentorship