
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    indexAxis: 'y',
    elements: {
        bar: {
            borderWidth: 0,
        },
    },
    responsive: true,
    plugins: {
        tooltip: {
            enabled: false
        },
        legend: {
            position: 'right',
            display: false,
        },
        title: {
            display: false,
            text: 'Chart.js Horizontal Bar Chart',
        },
    },
    scales: {
        y: {
            grid: {
                display: false
            }
        },
    }
};

const labels = ["Lead", "Inculcate", "Reach", "Engage", "Enroll", "Align", "knowledge"];

const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [2, 4, 6, 8, 10, 12, 14],
            backgroundColor: ["#6259ca", "#f1388b", "#01b8ff", "#f16d75", "#19b159", "#fad43a", "#828db1"],
        },
    ],
};
export const PerformanceRatingScore = () => {
    return (
        <div class="card custom-card card-dashboard-calendar pb-4">
            <div class="col-sm-12 text-center">
                <button class="btn bg-blue text-white campaigns mb-4"> 48     Performance Rating Score</button>
            </div>
            {/* <canvas id="horizontalBarChartCanvas"> */}

            <Bar options={options} data={data} />
            {/* </canvas> */}
            <table class="table mb-0 border-top table-bordered  mt-20" width="100%">
                <tbody>

                    <tr>
                        <th>Social Link</th>
                        <th>Followers</th>
                        <th>Likes</th>
                        <th>Posts</th>
                        <th>Campaigns</th>
                    </tr>

                    <tr>
                        <td>Facbook</td>
                        <td>1000</td>
                        <td>2000</td>
                        <td>1000</td>
                        <td>5</td>
                    </tr>

                    <tr>
                        <td>Twitter</td>
                        <td>1000</td>
                        <td>2000</td>
                        <td>1000</td>
                        <td>5</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}