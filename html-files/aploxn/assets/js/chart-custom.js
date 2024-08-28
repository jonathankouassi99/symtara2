// Get the drawing context on the canvas
var densityCanvas = document
  .getElementById("consulting-chart")
  .getContext("2d");

Chart.defaults.global.defaultFontFamily = "Marcellus";
Chart.defaults.global.defaultFontSize = 14;

var barChart = new Chart(densityCanvas, {
  type: "bar",
  data: {
    labels: ["May 2024", "Jun 2024", "Jul 2024", "Aug 2024", " Sept 2024"],
    datasets: [
      {
        label: "Competitors",
        backgroundColor: "#324662",
        borderColor: "#324662",
        data: [66, 78, 88, 70, 90, 92],
      },
      {
        label: "Symtara",
        backgroundColor: "#789FC0",
        borderColor: "#789FC0",
        data: [53, 69, 95, 82, 96, 87],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Chart.js Bar Chart - Stacked",
      },
    },
    interaction: {
      intersect: false,
    },
    // scales: {
    //     x: {
    //         stacked: true,
    //     },
    //     y: {
    //         stacked: true
    //     }
    // },
    responsive: true,
  },
});
