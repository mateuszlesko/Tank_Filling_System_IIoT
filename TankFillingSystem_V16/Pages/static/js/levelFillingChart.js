var config = {
    type: 'bar',
    data: {
        labels: ["Liquid Level"],
        datasets: [{
                label: "Liquid Fill Level",
                data: [560],
                fill: false,
                backgroundColor: "#0694cc",
                borderColor: "#eebcde",
                borderCapStyle: 'butt',
                borderDash: [5, 5],
            }]
    },
    options: {
        responsive: true,
        legend: {
            position: 'bottom',
        },
        hover: {
            mode: 'label'
        },
        scales: {
            xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Tanks Liquid Levels'
                    }
                }],
            yAxes: [{
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        steps: 20,
                        stepValue: 10,
                        max: 1000
                    }
                }]
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart - Legend'
        }
    }
};

new Chart("myChart",config);