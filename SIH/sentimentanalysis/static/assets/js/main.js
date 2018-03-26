var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {
	return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
	},
});

 var data = {
  labels: ["Positive", "Negative", "Neutral"],
  datasets: [{
    data: [60, 20, 20],
      backgroundColor: [
          "#5aff23",
          "#ff0000",
          "#00ffe5"
      ]
  }],

};

var options = {
  maintainAspectRatio: false,
};

Chart.Doughnut('chart', {
  options: options,
  data: data
});