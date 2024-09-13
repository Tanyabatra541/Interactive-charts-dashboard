"use client";
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const PieChart: React.FC = () => {
  const [pieData, setPieData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/pie-chart-data/")
      .then((response) => {
        setPieData(response.data.data);
      })
      .catch((error) => console.error("Error fetching pie data:", error));
  }, []);

  const options = {
    chart: { type: "pie" },
    title: { text: "Pie Chart" },
    series: [{ name: "Pie Data", data: pieData }],
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pie Chart</h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
