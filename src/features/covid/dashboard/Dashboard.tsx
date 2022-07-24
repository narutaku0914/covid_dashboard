import { FC, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  // styled,
} from "@mui/material";
import styles from "./Dashboard.module.css";
import { SwitchCountry } from "../switchCountry/SwitchCountry";
import { Cards } from "../cards/Cards";
import { Chart } from "../charts/Chart";
import { PieChart } from "../charts/PieChart";
import { useAppSelector } from "../../../app/hooks";
import { fetchAsyncGetDaily, selectDaily } from "../covidSlice";
import { useAppDispatch } from "../../../app/hooks";

export const Dashboard: FC = () => {
  const dispatch = useAppDispatch();
  const daily = useAppSelector(selectDaily);

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("Japan"));
  }, [dispatch]);

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            COVID-19 Live Dashboard
          </Typography>
          <div>
            <Typography variant="body1">
              {new Date(daily[daily.length - 1].Date).toDateString()}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={styles.content}>
        <div className={styles.container}>
          <SwitchCountry />
        </div>
        <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
            <Cards />
          </Grid>
          <Grid item xs={12} md={7}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={5}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
