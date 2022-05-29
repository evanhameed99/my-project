import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../styles/homepage.css';
import _, { forEach } from 'lodash';
ChartJS.register(ArcElement, Tooltip, Legend);

interface IGraphProp {
    menus: any[];
}


const Graph: React.FC<IGraphProp> = ({ menus }) => {


    const total = _.sumBy(menus, function (o) { return o.totalAmount });

    const labels = menus.map((menu: any) => {
        const label = menu.projectName && menu.projectName.length > 2 ? menu.projectName : menu.gatewayName;
        return label;
    });

    let menuNumber = 0;
    forEach(menus, function (menu: any) {
        menuNumber += menu.data.length;
    });


    const datasets = menus.map((menu: any) => {
        return (menu.data.length / menuNumber) * 100
    })
    const data = {
        labels: labels,
        datasets: [
            {
                label: '# of Votes',
                data: datasets,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,


            },
        ],
    };



    return (
        <div className='graphWrapper'>
            <div className='graph'>
                <Doughnut data={data}
                    options={{
                        plugins: {
                            legend: {
                                labels: {
                                    usePointStyle: true,
                                    pointStyle: 'circle',


                                }
                            }
                        }
                    }}
                />

            </div>
            <footer className='graphDiv'>
                { menus && menus.length > 0 && menus[0].projectName ? <p>GATEWAY TOTAL |  </p> : <p>PROJECT TOTAL | </p>}
                <span style={{marginLeft : '5px'}}>{Math.round((total + Number.EPSILON) * 100) / 100}</span>
            </footer>
        </div>
    )
}

export default Graph