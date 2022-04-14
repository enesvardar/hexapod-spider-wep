import React from "react";
import Plot from "react-plotly.js";

const COG_COLOR = "#32ff7e";
const COG_SIZE = 14;
const BODY_COLOR = "#FC427B";
const BODY_OUTLINE_WIDTH = 12;
const AXIS_ZERO_LINE_COLOR = "#079992";
const PAPER_BG_COLOR = "rgb(255, 255, 255)";
const GROUND_COLOR = "rgb(200, 255, 255)";

const CAMERA_VIEW = {
  center: {
    x: 0.0005967195135552272,
    y: 0.11455181630825005,
    z: -0.44957387699746415,
  },
  eye: {
    x: 0.010119765679525836,
    y: 0.573601223004958,
    z: 0.04247372257492105,
  },
  up: {
    x: 0.006592638138864914,
    y: 0.00003338632363222382,
    z: 0.9999782677677168,
  },
};
const SCENE = {
  xaxis: {
    nticks: 1,
    range: [-600, 600],
    zerolinecolor: AXIS_ZERO_LINE_COLOR,
    showbackground: false,
  },
  yaxis: {
    nticks: 1,
    range: [-600, 600],
    zerolinecolor: AXIS_ZERO_LINE_COLOR,
    showbackground: false,
  },
  zaxis: {
    nticks: 1,
    range: [-10, 590],
    zerolinecolor: AXIS_ZERO_LINE_COLOR,
    showbackground: true,
    backgroundcolor: GROUND_COLOR,
  },
  aspectmode: "manual",
  aspectratio: { x: 1, y: 1, z: 1 },
  camera: CAMERA_VIEW,
};

export const LAYOUT = {
  scene: SCENE,
  margin: { b: 20, l: 10, r: 10, t: 20 },
  paper_bgcolor: PAPER_BG_COLOR,
  showlegend: false,
  autosize: true,
  width: 1200,
  height: 800,
};

export const genTemplate = (traces) => {
  const data = [];

  for (let i = 0; i < traces.length; i++) {
    data.push({
      x: traces[i].x,
      y: traces[i].y,
      z: traces[i].z,
      type: "scatter3d",
      mode: "lines+markers",
      showlegend: false,
      marker: { color: COG_COLOR, opacity: 1, size: COG_SIZE },
      line: { color: BODY_COLOR, opacity: 1.0, width: BODY_OUTLINE_WIDTH },
    });
  }

  return {
    data,
    layout: LAYOUT,
  };
};
