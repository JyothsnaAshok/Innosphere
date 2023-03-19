import { Button, Row} from "antd";
import Head from "next/head";
import Image from "next/image";
import Styles from "../../styles/pages/profile.module.scss";
import DashboardLayout from "../../components/DashboardLayout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout title="Dashboard">
        <div className={Styles.Main_container}>
          {/* <div className={Styles.title}>Profile</div> */}

          <div className={Styles.cardsContainer}>
          <div className={Styles.cardRow}>
          <div className={Styles.cards}>
            <div className={Styles.cardsTitle}>Company Details</div>
            <div className={Styles.cardsText}>
              <ul>
                <li>Name</li>
                <li>XYZ</li>
                <li>Name</li>
                <li>XYZ</li>
                <li>Name</li>
                <li>XYZ</li>
              </ul>
            </div>
          </div>

          <div className={Styles.cards}>
            <div className={Styles.cardsTitle}>Company Details</div>
            <div className={Styles.cardsText}>
              <ul>
                <li>Name</li>
                <li>XYZ</li>
                <li>Name</li>
                <li>XYZ</li>
                <li>Name</li>
                <li>XYZ</li>
              </ul>
            </div>
          </div>

          </div>

          <div className={Styles.cards2}>
            <div className={Styles.cardsTitle}>Company Details</div>
            <div className={Styles.cardsText}>
              <ul>
                <li>Name</li>
                <li>XYZ</li>
                <li>Name</li>
                <li>XYZ</li>
                <li>Name</li>
                <li>XYZ</li>
              </ul>
            </div>
          </div>

          </div>
        </div>
      </DashboardLayout>
    </div>
  );
}
