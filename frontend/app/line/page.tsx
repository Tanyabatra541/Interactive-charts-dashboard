"use client";
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const LineChart: React.FC = () => {
  const [lineData, setLineData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/line-chart-data/")
      .then((response) => {
        setLineData(response.data.data);
      })
      .catch((error) => console.error("Error fetching line data:", error));
  }, []);

  const options = {
    title: { text: "Line Chart" },
    series: [{ name: "Line Data", data: lineData }],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Line Chart</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
