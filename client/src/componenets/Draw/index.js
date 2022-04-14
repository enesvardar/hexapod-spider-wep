import React from "react";
import Plot from "react-plotly.js";
import { genTemplate } from "../Template";

export const Draw = ({ traces }) => {
  
  var template = (genTemplate(traces))

  return (
    traces && (
      <Plot
        data={template.data}
        layout={template.layout}
      />
    )
  );
};
