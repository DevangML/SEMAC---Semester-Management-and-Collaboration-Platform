import React from 'react';
import styles from '../../styles/main.module.css';
import { Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

//data for bar chart
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  datasets: [
    {
      label: 'Sales/ month',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 56, 55, 40, 57, 40, 48, 59, 62],
    },
  ],
};

//doughnut chart data set

const data1 = {
  labels: ['Organic', 'Social Media', 'Websites'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

function StudentHome({ role }) {
  if (role && role === 'Student') {
    return (
      <div className={styles.contentcontainer}>
        <section>
          <div className={styles.contentwrapper}>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/timetable/Timetable">
                  <h2>TIMETABLE</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <h2>Attendance</h2>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <a href="/collab/Collab">
                  <h2>ACADEMICS</h2>
                </a>
              </div>
            </div>
            <div className={styles.tabs}>
              <div className={styles.categories}>
                <h2>PERFORMANCE</h2>
              </div>
            </div>
          </div>
          {/* chart started  */}
          <div className={styles.charts}>
            <div className={styles.bar}>
              <h2>Sales</h2>
              <Line data={data} className={styles.line} />
            </div>
            <div className={styles.circle}>
              <h2>Customers Arrived</h2>
              <Doughnut data={data1} className={styles.nut} />
            </div>
          </div>
        </section>
      </div>
    );
  }
  return <a href="/api/auth/signin">SIGN IN</a>;
}

export default StudentHome;
