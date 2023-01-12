const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let temps = [23, 18, 9, 3, 46]
const average = array => array.reduce((a, b) => a + b) / array.length;
let minTemp = Math.min.apply(Math, temps)
let maxTemp = Math.max.apply(Math, temps)
let avgTemp = average(temps)
console.log(minTemp)
document.getElementById("avg").innerHTML = `Average Temperature: ${avgTemp} C`
document.getElementById("max").innerHTML = `Max Temperature: ${maxTemp} C`
document.getElementById("min").innerHTML = `Min Temperature: ${minTemp} C`


let myChart = document.getElementById('myChart').getContext('2d')
const data = {
    labels:[0, 1, 2, 3, 4],
    datasets:[{
        borderColor: 'rgb(235, 190, 10)',
        label: 'Temperature',
        labelColor: 'red',
        data: temps,
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
                text: 'Temperature vs Time Graph',
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
                  text: 'Temperature (Degrees Celcius)',
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
