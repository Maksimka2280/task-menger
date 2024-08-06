let ctx = document.querySelector('#myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ['High', 'Medium', 'Normal', 'Low'],
        datasets: [{
            label: 'total',
            data: [3500, 2210, 2002, 850],
            backgroundColor: [
                '#888ADB'
            ],
            borderColor: [
                '#888ADB'
            ],
            borderWidth: 1,
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            }
        }
    }

    
});
function addTask(priority){
    var index = chartData.labels.indexOf(priority);
    if (index !== -1) {
        chartData.datasets[0].data[index]++;
        myChart.update();
    }
}