// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
// 'pending', 'active', 'done', 'failed', 'manual', 'broken'
var ctx = document.getElementById("requestsByStatusChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Done", "Pending", "Active", "Failed", "Manual", "Broken"],
    datasets: [{
      data: [30, 25, 25, 2, 15, 3],
      backgroundColor: ['#4E73DF', '#f6c23e', '#1cc88a', '#e74a3b', '#36b9cc', '#858796'],
      hoverBackgroundColor: ['#4E73DF', '#f6c23e', '#1cc88a', '#e74a3b', '#36b9cc', '#858796'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 80,
  },
});
