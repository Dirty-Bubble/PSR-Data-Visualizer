const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let speeds = [23, 18, 9, 3, 46]
const average = array => array.reduce((a, b) => a + b) / array.length;
let minSpeed = Math.min.apply(Math, speeds)
let maxSpeed = Math.max.apply(Math, speeds)
let avgSpeed = average(speeds)
console.log(minSpeed)
document.getElementById("avg").innerHTML = `Average Speed: ${avgSpeed} MPH`
document.getElementById("max").innerHTML = `Max Speed: ${maxSpeed} MPH`
document.getElementById("min").innerHTML = `Min Speed: ${minSpeed} MPH`


let myChart = document.getElementById('myChart').getContext('2d')
const data = {
    labels:[0, 1, 2, 3, 4],
    datasets:[{
        borderColor: 'rgb(235, 190, 10)',
        label: 'Speed',
        labelColor: 'red',
        data: speeds,
        pointBackgroundColor: 'white',
        font: {
            color: 'white'
        }
    }]
}
let tempChart = new Chart(myChart, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            },
            title: {
                display: true,
                text: 'Speed vs Time Graph',
                color: 'white',
                font: {
                    size: 18
                }
            }
        },
        scales: {
          x: {
            title: {
                display: true,
                text: 'Time (Seconds)',
                color: 'white'
            },
            grid: {
              color: 'white',
            },
            ticks: {
                color: 'white'
            }
          },
          y: {
            title: {
                display: true,
                text: 'Speed (MPH)',
                color: 'white'
            },            
            grid: {
              color: 'white',
            },
            ticks: {
                color: 'white'
            }
          }
        }
      }
})
