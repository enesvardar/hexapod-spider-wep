import React from "react";
import Plot from "react-plotly.js";
import { genTemplate } from "../Template";

export const Draw = ({ traces }) => {
  
  var template = (genTemplate(traces)) // backend üzerinden gelen traces datasına göre çizim template oluşturuluyor.

  return (
    traces && (
      <Plot
        data={template.data}
        layout={template.layout}
      />
    )
  );
};
