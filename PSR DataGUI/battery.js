const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

let battery = [100, 88, 79, 63, 56]
const average = array => array.reduce((a, b) => a + b) / array.length;
let minBattery = Math.min.apply(Math, battery)
let maxBattery = Math.max.apply(Math, battery)
let avgBattery = average(battery)
console.log(minBattery)
document.getElementById("avg").innerHTML = `Average Battery %: ${avgBattery}`
document.getElementById("max").innerHTML = `Max Battery %: ${maxBattery}`
document.getElementById("min").innerHTML = `Min Battery %: ${minBattery}`


let myChart = document.getElementById('myChart').getContext('2d')
const data = {
    labels:[0, 1, 2, 3, 4],
    datasets:[{
        borderColor: 'rgb(235, 190, 10)',
        label: 'Battery %',
        labelColor: 'red',
        data: battery,
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
                text: 'Battery % vs Time Graph',
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
                  text: 'Charge (Percentage)',
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
