import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { selectDaily } from "../covidSlice";

export const PieChart: FC = () => {
  const daily = useSelector(selectDaily);

  const motality =
    (100 * daily[daily.length - 1].Deaths) / daily[daily.length - 1].Confirmed;

  const PieChart = daily[0] && (
    <Doughnut
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            data: [
              daily[daily.length - 1].Confirmed,
              daily[daily.length - 1].Recovered,
              daily[daily.length - 1].Deaths,
            ],
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "#008080",
              "rgba(255,0,0,0.5)",
            ],
            hoverBackgroundColor: ["#36A2EB", "#3cb371", "#ff6384"],
            borderColor: ["transparent", "transparent", "transparent"],
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 15,
            },
          },
        },
      }}
    />
  );
  return (
    <>
      <Typography align="center" color="textSecondary" gutterBottom>
        Motarity {motality.toFixed(2)} [%]
      </Typography>
    </>
  );
};
