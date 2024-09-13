"use client";
import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import Highstock from "highcharts/modules/stock";
import axios from "axios";

// Initialize Highstock for candlestick charts
if (typeof Highcharts === "object") {
  Highstock(Highcharts);
}

const CandlestickChart: React.FC = () => {
  const [candlestickData, setCandlestickData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/candlestick-data/")
      .then((response) => {
        const formattedData = response.data.data.map((point: any) => [
          new Date(point.x).getTime(),
          point.open,
          point.high,
          point.low,
          point.close,
        ]);
        setCandlestickData(formattedData);
      })
      .catch((error) =>
        console.error("Error fetching candlestick data:", error)
      );
  }, []);

  const options = {
    title: { text: "Candlestick Chart" },
    series: [
      {
        type: "candlestick",
        name: "Stock Data",
        data: candlestickData,
      },
    ],
    xAxis: { type: "datetime" },
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Candlestick Chart
      </h2>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CandlestickChart;
