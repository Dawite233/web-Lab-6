    //alert('is this working')

    let canvas = document.querySelector('#soda-chart')
    let context = canvas.getContext('2d')

    let chart = new Chart (context, {
        type: 'bar',
        data: {
            labels: ['Coke', 'Pepsi', 'Sprite', 'Sparked Water', 'Either', 'Neither'],
            datasets: [ {
                label: 'Number of votes',
                data:  [18, 14, 20, 16, 7, 10],
                backgroundColor: ['blue', 'green', 'yellow', '#574242', 'red', 'brown']
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    })