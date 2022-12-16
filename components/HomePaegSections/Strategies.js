import { ArcElement, Chart, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";
import styles from "../../styles/HomePageStyles/Strategies.module.css";
import HorizontalLine from "../HorizontalLine";
Chart.register(ArcElement, Tooltip, Legend);
const Strategies = () => {
  const data = {
    labels: ["Options", "Equity", "Commodities", "Penny Stocks"],
    datasets: [
      {
        data: [20, 40, 20, 20],
        backgroundColor: ["#3E065F", "#3E2C41", "#2C3639", "#704F4F"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          padding: 20,
          color: "white",
        },
      },
    },
    // autoPadding: true,
    // responsive: true,
    // maintainAspectRatio: true,
  };
  return (
    <div className={styles.main}>
      <HorizontalLine Heading={"About Our Strategies"} pageNo={"2"} />
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.heading}>How we handle your Funds?</div>
          <div className={styles.desc}>
            your funds will be invested equally in these 4 segments
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.piedesktop}>
            <Pie data={data} options={options} width={550} height={550} />
          </div>

          <div className={styles.phone}>
            <Pie data={data} options={options} width={450} height={450} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strategies;
