const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let rpm = [23, 18, 9, 3, 46]
const average = array => array.reduce((a, b) => a + b) / array.length;
let minRPM = Math.min.apply(Math, rpm)
let maxRPM = Math.max.apply(Math, rpm)
let avgRPM = average(rpm)
console.log(minRPM)
document.getElementById("avg").innerHTML = `Average RPM: ${avgRPM}`
document.getElementById("max").innerHTML = `Max RPM: ${maxRPM}`
document.getElementById("min").innerHTML = `Min RPM: ${minRPM}`


let myChart = document.getElementById('myChart').getContext('2d')
const data = {
    labels:[0, 1, 2, 3, 4],
    datasets:[{
        borderColor: 'rgb(235, 190, 10)',
        label: 'RPM',
        labelColor: 'red',
        data: rpm,
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
                text: 'RPM vs Time Graph',
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
                  text: 'RPM (Revs Per Minute)',
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
