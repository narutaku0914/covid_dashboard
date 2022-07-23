import { FC } from "react";
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";
import { Line } from "react-chartjs-2";
import "./Chart.module.css";

export const Chart: FC = () => {
  const daily = useSelector(selectDaily);
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
  return <div className="container">{lineChart}</div>;
};
