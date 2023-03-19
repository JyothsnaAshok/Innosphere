import React from 'react'
import { Collapse } from 'antd';
import Admindash from '../../components/Admindash';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function Home() {

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <div>
      <Admindash>
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Baylink" key="1">
              <p>
                The startup aims to assist direct-to-consumer (D2C) brands in
                establishing an offline retail presence through store
                collaborations and also providing them with an online storefront
                via our own e-commerce platform. The platform helps customers
                find the nearest store where the brand&apos;s products are
                available. Our solution aims to provide a comprehensive solution
                for D2C brands to reach both online and offline customers
                effectively
              </p>
            </Panel>
            <Panel header="Fundinc" key="2">
              <p>
                We want to increase accessiblity to investment opportunities in
                vetted early-stage startups working in the domains you believe
                in.
              </p>
            </Panel>
            <Panel header="Zenefit" key="3">
              <p>
                Zenefit is a B2B employee benefits platform designed for GenZ,
                the next generation of working millennials. It is a new,
                data-driven and highly personalised employee benefits platform
                that creates comprehensive, trusted recommendations for its
                members. Members have the power to choose the plans and benefits
                they value most, while also gaining access to exclusive
                discounts at select brand partners.
              </p>
            </Panel>
            <Panel header="Facebook" key="1">
              <p>
                The startup aims to assist direct-to-consumer (D2C) brands in
                establishing an offline retail presence through store
                collaborations and also providing them with an online storefront
                via our own e-commerce platform. The platform helps customers
                find the nearest store where the brand&apos;s products are
                available. Our solution aims to provide a comprehensive solution
                for D2C brands to reach both online and offline customers
                effectively
              </p>
            </Panel>
            <Panel header="Formi" key="2">
              <p>
                We want to increase accessiblity to investment opportunities in
                vetted early-stage startups working in the domains you believe
                in.
              </p>
            </Panel>
            <Panel header="Bugbase" key="3">
              <p>
                Zenefit is a B2B employee benefits platform designed for GenZ,
                the next generation of working millennials. It is a new,
                data-driven and highly personalised employee benefits platform
                that creates comprehensive, trusted recommendations for its
                members. Members have the power to choose the plans and benefits
                they value most, while also gaining access to exclusive
                discounts at select brand partners.
              </p>
            </Panel>
    </Collapse>
      </Admindash>
    </div>
  )
}

