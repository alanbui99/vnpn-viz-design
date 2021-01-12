// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';
// pending', 'active', 'done', 'broken']
// Pie Chart Example
// 'pending', 'active', 'done', 'failed', 'manual', 'broken'
var ctx = document.getElementById("matchesByStatusChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Done", "Pending", "Active", "Broken"],
    datasets: [{
      data: [3, 2, 10, 1],
      backgroundColor: ['#858796', '#f6c23e', '#1cc88a', '#e74a3b'],
      hoverBackgroundColor: ['#858796', '#f6c23e', '#1cc88a', '#e74a3b'],
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
