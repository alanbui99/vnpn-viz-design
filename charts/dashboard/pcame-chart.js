var options1 = {
    type: 'doughnut',
    data: {
      labels: ["Active", "Pending", "Failed"],
      datasets: [
         {
                  label: '# of Votes',
                  data: [30, 0, 2],
                  backgroundColor: [
                      '#1cc88a',
                      '#f6c23e',
                      '#e74a3b'
                  ],
                  borderColor: [
                      'rgba(255, 255, 255 ,1)',
                      'rgba(255, 255, 255 ,1)',
                      'rgba(255, 255, 255 ,1)'
                  ],
                  borderWidth: 5
              }
          ]
    },
    options: {
     rotation: 1 * Math.PI,
              circumference: 1 * Math.PI,
              legend: {
                  display: false
              },
              tooltip: {
                  enabled: false
              },
              cutoutPercentage: 90
    }
  }
  
  var ctx1 = document.getElementById('pcameChart').getContext('2d');
  new Chart(ctx1, options1);