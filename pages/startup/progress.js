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
   <div>
     <DashboardLayout title="progress">
     <Radio.Group
        onChange={onChange}
        value={mode}
        style={{
          marginBottom: 20,
          marginLeft: 40,
        }}
      >
        <Radio value="left">Left</Radio>
        <Radio value="right">Right</Radio>
        <Radio value="alternate">Alternate</Radio>
      </Radio.Group>
      <Timeline
        mode={mode}
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
            children: 'Technical testing',
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