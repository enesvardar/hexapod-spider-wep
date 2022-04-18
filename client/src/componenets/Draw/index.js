import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import { genTemplate } from "../Template";

export const Draw = () => {
  
  const traces = useSelector((state) => state.traces.value); // her bir bacağın açı bilgilerini tutan data

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
