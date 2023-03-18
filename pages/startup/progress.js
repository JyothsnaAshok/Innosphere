import Styles from "styles/pages/progress.module.scss";
import DashboardLayout from "../../components/DashboardLayout";
import { Radio, Timeline } from 'antd';
import { useState } from 'react';

function progress() {
    const [mode, setMode] = useState('left');
    const onChange = (e) => {
      setMode(e.target.value);
    };
  return (
   <div className={Styles.mainContainer}>
     <DashboardLayout title="progress">
     <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
          marginLeft: "auto",
          marginRight: "auto",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <Radio value="left" className={Styles.radioBut}>Left</Radio>
        <Radio value="right" className={Styles.radioBut}>Right</Radio>
        <Radio value="alternate" className={Styles.radioBut}>Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
        color={"aliceblue"}
        style={{marginTop:"20px", alignItems:"center", justifyContent:"center",color:"aliceblue"}}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            label: '2015-09-01',
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },

        ]}/>
     </DashboardLayout>
   </div>
  )
}

export default progress