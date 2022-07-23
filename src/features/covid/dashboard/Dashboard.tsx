import { FC, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  // styled,
} from "@mui/material";
import "./Dashboard.module.css";
import { SwitchCountry } from "../switchCountry/SwitchCountry";
import { Cards } from "../cards/Cards";
import { Chart } from "../charts/Chart";
import { PieChart } from "../charts/PieChart";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncGetDaily, selectDaily } from "../covidSlice";

export const Dashboard: FC = () => {
  const dispatch = useDispatch();
  const daily = useSelector(selectDaily);

  useEffect(() => {
    dispatch(fetchAsyncGetDaily("Japan"));
  }, [dispatch]);

  return (
    <>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="h6"></Typography>
          <div>
            <Typography variant="h6">
              {new Date(daily[daily.length - 1].Date).toDateString()}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Container>
        <div className="container">
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
