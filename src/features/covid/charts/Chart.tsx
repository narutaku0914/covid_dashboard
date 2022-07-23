import { FC } from "react";
import { selectDaily } from "../covidSlice";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import styles from "./Chart.module.css";
import { useAppSelector } from "../../../app/hooks";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Chart: FC = () => {
  const daily = useAppSelector(selectDaily);
  const dates = daily.map(({ Date }) => Date);

  const lineChart = daily[0] && (
    <Line
      data={{
        labels: dates.map((date) => new Date(date).toDateString()),

        datasets: [
          {
            data: daily.map((data) => data.Confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Recovered),
            label: "Recovered",
            borderColor: "green",
            showLine: false,
          },
          {
            data: daily.map((data) => data.Deaths),
            label: "Deaths",
            borderColor: "#ff3378",
            showLine: false,
          },
        ],
      }}
    />
  );
  return <div className={styles.container}>{lineChart}</div>;
};
