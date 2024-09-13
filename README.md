# Interactive Charts Dashboard

![Interactive Charts](https://img.shields.io/badge/status-active-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-v13+-blue)
![Highcharts](https://img.shields.io/badge/Highcharts-10.3.3-orange)

## Project Overview

This project is an **Interactive Charts Dashboard** built with **Next.js** and **Highcharts**. The application allows users to visualize different types of financial and statistical charts, including:

- **Candlestick Chart**
- **Line Chart**
- **Bar Chart**
- **Pie Chart**

The charts are interactive and dynamic, providing real-time visualizations of data. Each chart is rendered on its own page, and the application is structured as a monorepo that integrates both the frontend and backend codebases.

## Features

- **Dynamic Charts**: Uses Highcharts to render various types of charts with real-time data.
- **Responsive Layout**: The dashboard is mobile-friendly and adapts to different screen sizes.
- **Interactive Navigation**: Users can switch between different charts through an easy-to-use navigation bar.
- **Separation of Backend and Frontend**: The backend API provides data for the charts, while the frontend displays interactive visualizations.

## Tech Stack

- **Frontend**: React.js, Next.js 13+, Tailwind CSS
- **Backend**: Django REST Framework (or replace with your backend technology)
- **Charts**: Highcharts, Highcharts React Wrapper
- **Styling**: Tailwind CSS for a modern and responsive UI

## Folder Structure

```
/app
  /candlestick
    /page.tsx        <-- Candlestick chart component
  /line
    /page.tsx        <-- Line chart component
  /bar
    /page.tsx        <-- Bar chart component
  /pie
    /page.tsx        <-- Pie chart component
  /layout.tsx        <-- Layout component for navigation
  /components
    /Navigation.tsx  <-- Interactive navigation bar
  /globals.css       <-- Global CSS including Tailwind
  /page.tsx          <-- Home page
/backend
  (Your backend code here - e.g., Django API)
```

## How to Run the Project

### Prerequisites

Make sure you have the following installed on your machine:

- **Node.js** (v14+ recommended)
- **npm** or **yarn**
- **Python** (if you are using a Django backend)
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/Tanyabatra541/Interactive-charts-dashboard.git
cd Interactive-charts-dashboard
```

### 2. Frontend Setup (Next.js)

1. Navigate to the frontend directory:

   ```bash
   cd app
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and go to:

   ```
   http://localhost:3000
   ```

### 3. Backend Setup (Django or your Backend)

If you're using Django for the backend:

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Django development server:

   ```bash
   python manage.py runserver
   ```

4. Your backend should be running at:

   ```
   http://localhost:8000
   ```

### 4. API Endpoints

The backend provides data for the charts via these API endpoints (adjust according to your backend):

- **Candlestick Chart Data**: `http://localhost:8000/api/candlestick-data/`
- **Line Chart Data**: `http://localhost:8000/api/line-chart-data/`
- **Bar Chart Data**: `http://localhost:8000/api/bar-chart-data/`
- **Pie Chart Data**: `http://localhost:8000/api/pie-chart-data/`

The frontend fetches data from these endpoints and renders the charts using Highcharts.

## How to Use

1. **Navigate**: Use the navigation bar at the top to switch between different types of charts.
2. **View Charts**: Each page contains an interactive chart (Candlestick, Line, Bar, or Pie).
3. **Explore Data**: Hover over the charts to explore the data points in real-time.

## Customization

You can easily customize the project by:

- Adding new charts.
- Modifying the chart configurations in each chart's `page.tsx` file.
- Styling the components using Tailwind CSS in `globals.css`.

## Contributing

Feel free to open issues and submit pull requests. We welcome any contributions to improve the dashboard or add more features!

### Steps to Contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m "Add new feature"`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
