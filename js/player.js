var podcasts = ["michigan-week-9.mp3",
				"michigan-week-8.mp3",
				"cfb-week-8.mp3",
				"cfb-week-7.mp3",
				"cfb-week-6.mp3",	
				"michigan-week-6.mp3",
				"cfb-nfl-headlines.mp3",
				"michigan-week-5.mp3"];

var podcastTitle = document.getElementById('podcastTitle');
var podcastSlider = document.getElementById('podcastSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextPodcastTitle = document.getElementById('nextPodcastTitle');

var podcastOne = "Oct. 31, 2016<br>Michigan State fought harder than Michigan did for Paul Bunyan, but Michigan still won. I break down why Michigan's effort was largely disappointing and how this game could have been a repeat of the 2015 loss.";
var podcastTwo = "Oct. 24, 2016<br>Michigan returned from a BYE in week 8 and impressed in every phase against Illinois. Can the Wolverines keep it going and finally grab an elusive victory against the slumping Michigan State Spartans in East Lansing?";
var podcastThree = "Oct. 24, 2016<br>Breaking down Ohio State's stunning loss in Happy Valley, the odds of one conference getting two teams into the playoff, how much longer does Helfrich have at Oregon and how OSU's loss actually hurts Michigan and the B1G.";
var podcastFour = "Oct. 17, 2016<br>Alabama shows Clemson and A&M how to beat inferior opponents. Wisconsin is the best two-loss team in cfb. Plus, did Georgia make a mistake firing Mark Richt, and would it even help Notre Dame and Oregon to fire their coaches?";
var podcastFive = "Oct. 11, 2016<br>How much did week 6 really tell us about Texas A&M and Miami? Which preseason favorites will have losing records? And why is it taking longer to turn Texas around than it took at Michigan and Alabama?";
var podcastSix = "Oct. 10, 2016<br>Michigan sent a message to Ohio State and the media by putting 78 points on Rutgers in week 6, but were they impressed? Is Ohio State a must-win game in order for Michigan to fully gain national respect?";
var podcastSeven = "Oct. 7, 2016<br>Miami and Texas A&M are among the CFB teams being tested this weekend while Charlie Strong's job at Texas is on the line against Oklahoma. Plus, are off-the-field issues with players and coaches overshadowing NFL games this season?";
var podcastEight = "Oct. 3, 2016<br>Michigan passed its biggest test of the season so far, thanks to a championship-caliber defense. But Michigan can't win the Big Ten without improving other parts of its game, starting with the kickers. That's what's great about Michigan's \"weak\" schedule.";

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