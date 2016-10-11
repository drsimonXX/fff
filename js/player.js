var podcasts = ["cfb-week-6.mp3",	
				"michigan-week-6.mp3",
				"cfb-nfl-headlines.mp3",
				"michigan-week-5.mp3",
				"cfb-week-5.mp3",
				"stanford-washington.mp3",
				"nfl-ratings-are-down.mp3",
				"cfb-week-4.mp3"];

var podcastTitle = document.getElementById('podcastTitle');
var podcastSlider = document.getElementById('podcastSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextPodcastTitle = document.getElementById('nextPodcastTitle');

var podcastOne = "Oct. 11, 2016<br>How much did week 6 really tell us about Texas A&M and Miami? Which preseason favorites will have losing records? And why is it taking longer to turn Texas around than it took at Michigan and Alabama?";
var podcastTwo = "Oct. 10, 2016<br>Michigan sent a message to Ohio State and the media by putting 78 points on Rutgers in week 6, but were they impressed? Is Ohio State a must-win game in order for Michigan to fully gain national respect?";
var podcastThree = "Oct. 7, 2016<br>Miami and Texas A&M are among the CFB teams being tested this weekend while Charlie Strong's job at Texas is on the line against Oklahoma. Plus, are off-the-field issues with players and coaches overshadowing NFL games this season?";
var podcastFour = "Oct. 3, 2016<br>Michigan passed its biggest test of the season so far, thanks to a championship-caliber defense. But Michigan can't win the Big Ten without improving other parts of its game, starting with the kickers. That's what's great about Michigan's \"weak\" schedule.";
var podcastFive = "Oct. 3, 2016<br>I'm talking about ALL of week 5's big games and big finishes in CFB. Plus, who should be the Heisman favorite now, and do CFB fans and experts overreact to great offensive performances?";
var podcastSix = "Sept. 30, 2016<br>The game of the season in the Pac-12 could tell us if Washington is for real while producing essential Heisman moments for Christian McCaffrey. Plus, must the winner of this game remain undefeated for a real shot at the playoff?"
var podcastSeven = "Sept. 27, 2016<br>NFL ratings are down while college football ratings are up, but why? I say it's not player protests, Hillary Clinton or Donald Trump. Hear why I place the blame on Tom Brady, Peyton Manning and the media!";
var podcastEight = "Sept. 27, 2016<br>It's starting early this season--Les Miles is out at LSU, and Brian Kelly's seat is warming up at Notre Dame. Plus, I'm calling out ESPN and College GameDay, Southern bias and B1G-time disrespect.";

var podcast = new Audio();

var currentPodcast = 0;

window.onload = loadPodcast;


function loadPodcast() {
	firstPodcast.innerHTML = podcastOne;
	podcast.src = "podcasts/" + podcasts[currentPodcast];
	podcastTitle.textContent = (currentPodcast + 1) + ". " + podcasts[currentPodcast];
	nextPodcastTitle.innerHTML = "Next Podcast: " + podcasts[currentPodcast + 1 % podcasts.length];
	podcast.forward = 1;
	podcasts.volume = volumeSlider.value;
	podcasts.play;
	setTimeout(showDuration, 1000);
}

//songs are in the songs folder, i.e. "songs/"

setInterval(updatePodcastSlider, 1000); //show progress of podcast; update every 1 second

function updatePodcastSlider() {
	var c = Math.round(podcast.currentTime);
	podcastSlider.value = c;
	currentTime.textContent = convertTime(c);
	if(podcast.ended){
		next();
	}
}

function convertTime(secs) {
	var min = Math.floor(secs/60);
	var sec = secs % 60; //gives remaining seconds
	min = (min < 10) ? "0" + min : min; //if mins less than 0 add '0'; else keep as mins
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}

function showDuration() {
	var d = Math.floor(podcast.duration);
	podcastSlider.setAttribute("max", d);
	duration.textContent = "Total Time: " + convertTime(d);
}

function playPause(img) {
	podcast.forward = 1;
	if(podcast.paused) {
		podcast.play();
		img.src = "images/pause.jpg";
	} else {
		podcast.pause();
		img.src = "images/play.jpg";
	}
}

function next(){
	currentPodcast = currentPodcast + 1 % podcasts.length;
	loadPodcast();
	if (currentPodcast === 0) {
		firstPodcast.innerHTML = podcastOne;
	} else if (currentPodcast === 1) {
		firstPodcast.innerHTML = podcastTwo;
	} else if (currentPodcast === 2) {
		firstPodcast.innerHTML = podcastThree;
	} else if (currentPodcast === 3) {
		firstPodcast.innerHTML = podcastFour;
	} else if (currentPodcast === 4) {
		firstPodcast.innerHTML = podcastFive;
	} else if (currentPodcast === 5) {
		firstPodcast.innerHTML = podcastSix;
	} else if (currentPodcast === 6) {
		firstPodcast.innerHTML = podcastSeven;
	} else {
		firstPodcast.innerHTML = podcastEight;
		nextPodcastTitle.innerHTML = "Next Podcast: " + podcasts[0];
	}
	
	if (currentPodcast >= podcasts.length) {
		currentPodcast = 0;
		podcast.src = "podcasts/" + podcasts[currentPodcast];
		podcastTitle.textContent = (currentPodcast + 1) + ". " + podcasts[currentPodcast];
		nextPodcastTitle.innerHTML = "Next Podcast: " + podcasts[currentPodcast + 1 % podcasts.length];
		firstPodcast.innerHTML = podcastOne;
	}
}

function previous () {
	currentPodcast--;
	currentPodcast = (currentPodcast < 0) ? podcasts.length - 1 : currentPodcast;
	loadPodcast();
	if (currentPodcast === 0) {
		firstPodcast.innerHTML = podcastOne;
	} else if (currentPodcast === 1) {
		firstPodcast.innerHTML = podcastTwo;
	} else if (currentPodcast === 2) {
		firstPodcast.innerHTML = podcastThree;
	} else if (currentPodcast === 3) {
		firstPodcast.innerHTML = podcastFour;
	} else if (currentPodcast === 4) {
		firstPodcast.innerHTML = podcastFive;
	} else if (currentPodcast === 5) {
		firstPodcast.innerHTML = podcastSix;
	} else if (currentPodcast === 6) {
		firstPodcast.innerHTML = podcastSeven;
	} else {
		firstPodcast.innerHTML = podcastEight;
		nextPodcastTitle.innerHTML = "Next Podcast: " + podcasts[0];
	}
}

function seekPodcast() {
	podcast.currentTime = podcastSlider.value;
	currentTime.textContent = convertTime(podcast.currentTime);
}

function adjustVolume() {
	podcast.volume = volumeSlider.value;
}

function forward() {
	//increase playback rate in the video
	podcasts.forward += 0.5;
}

function backward() {
	podcasts.backward -= 0.5;
}