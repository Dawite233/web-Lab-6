

    let canvas = document.querySelector('#college-map')
    let context = canvas.getContext('2d')


    let dataChart = new Chart (context, {
        type: 'bar',
        data: {
            labels: [
                "Verrazano-Narrows Bridge",
                "Golden Gate Bridge",
                "Mackinac Bridge",
                "George Washington Bridge",
                "Tacoma Narrows Bridge",
            ],
            datasets: [{
                label: 'Brige data charts in meters',
                data: [12, 12, 11, 10, 8],
                background: ['brown', 'green', 'yellow', '#574242', 'black']
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


