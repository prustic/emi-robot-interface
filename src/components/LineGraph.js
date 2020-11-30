import { Grid } from "@material-ui/core";
import React from "react";
import { VictoryChart, VictoryLine } from "victory";
import styled from "styled-components";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const BoxTitle = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #fff;
  font-family: "Montserrat";
  margin-bottom: 25px;
  padding-left: 10px;
`;

const yellow200 = "#FFF59D";
const deepOrange600 = "#F4511E";
const lime300 = "#DCE775";
const lightGreen500 = "#8BC34A";
const teal700 = "#00796B";
const cyan900 = "#006064";
const colors = [
  deepOrange600,
  yellow200,
  lime300,
  lightGreen500,
  teal700,
  cyan900,
];
const blueGrey50 = "#ECEFF1";
const blueGrey300 = "#90A4AE";
const blueGrey700 = "#455A64";
const grey900 = "#212121";

// Typography
const sansSerif = "'Helvetica Neue', 'Helvetica', sans-serif";
const letterSpacing = "normal";
const fontSize = 12;

// Layout
const padding = 8;
const baseProps = {
  width: 800,
  height: 400,
  padding: 50,
};

// * Labels
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding,
  fill: blueGrey700,
  stroke: "transparent",
  strokeWidth: 0,
};

const centeredLabelStyles = Object.assign(
  { textAnchor: "middle" },
  baseLabelStyles
);

// Strokes
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

// Put it all together...
const theme = {
  area: Object.assign(
    {
      style: {
        data: {
          fill: grey900,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  axis: Object.assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: "rgba(255,255,255,0.8)",
          strokeWidth: 2,
          strokeLinecap,
          strokeLinejoin,
        },
        axisLabel: Object.assign({}, centeredLabelStyles, {
          padding,
          stroke: "transparent",
        }),
        grid: {
          fill: "none",
          stroke: "rgba(255,255,255,0.4)",
          strokeDasharray,
          strokeLinecap,
          strokeLinejoin,
          pointerEvents: "painted",
        },
        ticks: {
          fill: "transparent",
          size: 5,
          stroke: "rgba(255,255,255,0.8)",
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: Object.assign({}, baseLabelStyles, {
          fill: "rgba(255,255,255,0.8)",
        }),
      },
    },
    baseProps
  ),
  polarDependentAxis: Object.assign({
    style: {
      ticks: {
        fill: "transparent",
        size: 1,
        stroke: "transparent",
      },
    },
  }),
  bar: Object.assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          padding,
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  boxplot: Object.assign(
    {
      style: {
        max: { padding, stroke: blueGrey700, strokeWidth: 1 },
        maxLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        median: { padding, stroke: blueGrey700, strokeWidth: 1 },
        medianLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        min: { padding, stroke: blueGrey700, strokeWidth: 1 },
        minLabels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        q1: { padding, fill: blueGrey700 },
        q1Labels: Object.assign({}, baseLabelStyles, { padding: 3 }),
        q3: { padding, fill: blueGrey700 },
        q3Labels: Object.assign({}, baseLabelStyles, { padding: 3 }),
      },
      boxWidth: 20,
    },
    baseProps
  ),
  candlestick: Object.assign(
    {
      style: {
        data: {
          stroke: blueGrey700,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 5 }),
      },
      candleColors: {
        positive: "#ffffff",
        negative: blueGrey700,
      },
    },
    baseProps
  ),
  chart: baseProps,
  errorbar: Object.assign(
    {
      borderWidth: 8,
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  group: Object.assign(
    {
      colorScale: colors,
    },
    baseProps
  ),
  histogram: Object.assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          stroke: grey900,
          strokeWidth: 2,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  legend: {
    colorScale: colors,
    gutter: 10,
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: baseLabelStyles,
      title: Object.assign({}, baseLabelStyles, { padding: 5 }),
    },
  },
  line: Object.assign(
    {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: blueGrey700,
          strokeWidth: 4,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  pie: Object.assign(
    {
      colorScale: colors,
      style: {
        data: {
          padding,
          stroke: blueGrey50,
          strokeWidth: 1,
        },
        labels: Object.assign({}, baseLabelStyles, { padding: 20 }),
      },
    },
    baseProps
  ),
  scatter: Object.assign(
    {
      style: {
        data: {
          fill: blueGrey700,
          opacity: 1,
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  stack: Object.assign(
    {
      colorScale: colors,
    },
    baseProps
  ),
  tooltip: {
    style: Object.assign({}, baseLabelStyles, {
      padding: 0,
      pointerEvents: "none",
    }),
    flyoutStyle: {
      stroke: grey900,
      strokeWidth: 1,
      fill: "#f0f0f0",
      pointerEvents: "none",
    },
    flyoutPadding: 5,
    cornerRadius: 5,
    pointerLength: 10,
  },
  voronoi: Object.assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: "transparent",
          strokeWidth: 0,
        },
        labels: Object.assign({}, baseLabelStyles, {
          padding: 5,
          pointerEvents: "none",
        }),
        flyout: {
          stroke: grey900,
          strokeWidth: 1,
          fill: "#f0f0f0",
          pointerEvents: "none",
        },
      },
    },
    baseProps
  ),
};

const LineGraph = () => {
  const dataLastWeek = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 7 },
  ];
  const dataLastMonth = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 17 },
    { x: 6, y: 12 },
    { x: 7, y: 13 },
    { x: 8, y: 15 },
    { x: 9, y: 14 },
    { x: 10, y: 17 },
  ];
  const dataLastYear = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 17 },
    { x: 6, y: 12 },
    { x: 7, y: 13 },
    { x: 8, y: 15 },
    { x: 9, y: 14 },
    { x: 10, y: 27 },
    { x: 11, y: 32 },
    { x: 12, y: 33 },
    { x: 13, y: 35 },
    { x: 14, y: 34 },
    { x: 15, y: 37 },
  ];
  const [timeSpanTitle, setTimeSpanTitle] = React.useState("Last Week");
  const [timeSpan, setTimeSpan] = React.useState(dataLastWeek);

  const handleChange = (e) => {
    if (e.target.value === "Last Week") {
      setTimeSpanTitle("Last Week");
      setTimeSpan(dataLastWeek);
    }
    if (e.target.value === "Last Month") {
      setTimeSpanTitle("Last Month");
      setTimeSpan(dataLastMonth);
    }
    if (e.target.value === "Last Year") {
      setTimeSpanTitle("Last Year");
      setTimeSpan(dataLastYear);
    }
  };
  return (
    <div>
      <VictoryChart theme={theme}>
        <VictoryLine
          style={{
            data: { stroke: "#d62839" },
            parent: { border: "3px solid #d62839" },
          }}
          data={timeSpan}
          animate={{
            duration: 2000,
            onLoad: { duration: 1000 },
          }}
        />
      </VictoryChart>
      <Grid container style={{ marginLeft: "25px" }}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Time Span</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={timeSpanTitle}
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value={"Last Week"}>Last Week</MenuItem>
              <MenuItem value={"Last Month"}>Last Month</MenuItem>
              <MenuItem value={"Last Year"}>Last Year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={8} style={{ paddingLeft: "15px" }}>
          <BoxTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BoxTitle>
        </Grid>
      </Grid>
    </div>
  );
};

export default LineGraph;
