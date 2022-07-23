import { FC } from "react";
import { MdLocalHospital } from "react-icons/md";
import Countup from "react-countup";
import { useAppSelector } from "../../../app/hooks";
import { selectDaily } from "../covidSlice";
import { Grid, CardContent, Typography, Card } from "@mui/material";
import styles from "./Cards.module.css";

export const Cards: FC = () => {
  const daily = useAppSelector(selectDaily);
  return (
    <div className={styles.container}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3} component={Card} className={styles.infected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital>Infected persons</MdLocalHospital>
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={daily[daily.length - 1].Confirmed}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.recovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital>Recovered persons</MdLocalHospital>
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={daily[daily.length - 1].Recovered}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.deaths}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <MdLocalHospital>Dead persons</MdLocalHospital>
            </Typography>
            <Typography variant="h5">
              <Countup
                start={0}
                end={daily[daily.length - 1].Deaths}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
