
//smooth scroll
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000, // Integer. How fast to complete the scroll in milliseconds
	easing: 'easeInOutCubic', // Easing pattern to use
	customEasing: function (time) {
	return time < 0.5 ? 2 * time * time : -1 + (4 - 2 * time) * time;
	},
});

function showTrending(){
    var trendingBox = document.querySelector('#trending-div');
    if(trendingBox.classList.contains('zero-opacity')){
        trendingBox.classList.remove('zero-opacity');
        trendingBox.classList.add('trending-box');
    }
    else{
        trendingBox.classList.remove('trending-box');
        trendingBox.classList.add('zero-opacity');
    }
}

var searchBox = document.querySelector(".search-term");
searchBox.addEventListener('click', showTrending);
