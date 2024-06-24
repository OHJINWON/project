import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import {Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale,
    PointElement,
    LineElement, Title} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";
import styles from "./Statistics.module.css";

ChartJS.register(ArcElement, CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,Tooltip, Legend);

const GET_STATISTICS = gql`
    query SeeStatistics {
        seeStatistics {
        byWeekNumberCount {
            weekNumber
            count
        }
        manCount
        womanCount
        }
    }
`
export default function Statistics() {
    const today = new Date();
    const year = today.getFullYear();
    const { loading, error, data } = useQuery(GET_STATISTICS);
    if (loading) return <p></p>;
    console.log("data",data)
    if (error) return <p>{`err_00 : 예약 환자 통계 조회에 실패 하였습니다.`}</p>;
    const {manCount, womanCount} = data?.seeStatistics;
    const { byWeekNumberCount } = data.seeStatistics;
    
   
    
    const LineData = {
        labels: byWeekNumberCount.map((data) =>  `${data.weekNumber}주차`),
        datasets: [
            {   
                data: byWeekNumberCount.map((data) => data.count),
                borderColor: "#36A2EB",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                pointStyle: false,
                hoverPointStyle: "circle",
                pointHoverRadius: 5,
                cubicInterpolationMode: "monotone",
                borderWidth: 1,
            },
        ],
    };

    const lineOption = {
        responsive: true,// 반응형 여부
        maintainAspectRatio: false,
        height: 280,
        plugins: {
            legend: {
                display: false,
            },
            title: {
                display: true,
                text: `${year}년도 환자 추이`,
                align: 'start',
            },

            tooltip:{
                
                callbacks: {
                    title: () => {
                        return '';
                    },
                    label: (context) => {
                        let dataIndex = context.dataIndex;
                        let label = context.dataset.data[dataIndex];
                        return `${label}명`;
                    },
                }
            },
        },
        scales: {
            x: {
                display: true,
                grid: {
                    color: 'transparent'
                },
                ticks:{
                    font:{
                        size: 10,
                        weight: "bold",
                    }
                }
            },
            y: {
                display: false,
            },  
        },
    }


    const DoughnutData =  {
        labels: [`남${manCount}%`, `여${womanCount}%`],
        datasets: [
            {
                data: [manCount, womanCount],
                backgroundColor: ["#fb6544", "#3b7cf3"],
            },
        ],
    };

    const optionDoughnut = {
        maintainAspectRatio: false,
        responsive: false,
        
        plugins: {
            legend: {
                position: "right",
                align: 'center',
                labels: {
                    padding: 30,
                    boxWidth: 10,
                    boxHeight:10,
                    border: false,
                },
            },
            tooltip:{
                enabled: false,
            },
            
            title: {
                display:true,
                text: `${year}년도 예약자 성비`,
                align: 'start',
            },
            cutoutPercentage: 80,
            scales: {
                x: {
                    display: true,
                    grid: {
                        color: 'transparent'
                    },
                    ticks:{
                        font:{
                            size: 10,
                            weight: "bold",
                        }
                    }
                },
            },
        },
    }

    // console.log(manCount)
    
    return(
        <div className={styles.contents}>
            <div>
                통계 영역
            </div>
            <div className={styles.aaa}>
                <div className={styles.line__Left}>
                    <Line data={LineData} options={lineOption} height={300}/>
                </div>
                <div className={styles.line__right}>
                    <Doughnut data={DoughnutData} options={optionDoughnut} width={280} height={300}/>
                </div>
            </div>
        </div>
    );
}