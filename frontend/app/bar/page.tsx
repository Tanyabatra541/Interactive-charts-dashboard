"use client";
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const BarChart: React.FC = () => {
  const [barData, setBarData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/bar-chart-data/")
      .then((response) => {
        setBarData(response.data.data);
      })
      .catch((error) => console.error("Error fetching bar data:", error));
  }, []);

  const options = {
    chart: { type: "column" },
    title: { text: "Bar Chart" },
    series: [{ name: "Bar Data", data: barData }],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bar Chart</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
