var podcasts = ["cfb-week-5.mp3",
				"stanford-washington.mp3",
				"nfl-ratings-are-down.mp3",
				"cfb-week-4.mp3",
				"michigan-week-4.mp3",
				"colin-kaepernick.mp3",
				"coaches-hot-seat.mp3",
				"week-3-cfb.mp3"];

var podcastTitle = document.getElementById('podcastTitle');
var podcastSlider = document.getElementById('podcastSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextPodcastTitle = document.getElementById('nextPodcastTitle');

var podcastOne = "Oct. 3, 2016<br>I'm talking about ALL of week 5's big games and big finishes in CFB. Plus, who should be the Heisman favorite now, and do CFB fans and experts overreact to great offensive performances?";
var podcastTwo = "Sept. 30, 2016<br>The game of the season in the Pac-12 could tell us if Washington is for real while producing essential Heisman moments for Christian McCaffrey. Plus, must the winner of this game remain undefeated for a real shot at the playoff?"
var podcastThree = "Sept. 27, 2016<br>NFL ratings are down while college football ratings are up, but why? I say it's not player protests, Hillary Clinton or Donald Trump. Hear why I place the blame on Tom Brady, Peyton Manning and the media!";
var podcastFour = "Sept. 27, 2016<br>It's starting early this season--Les Miles is out at LSU, and Brian Kelly's seat is warming up at Notre Dame. Plus, I'm calling out ESPN and College GameDay, Southern bias and B1G-time disrespect.";
var podcastFive = "Sept. 26, 2016<br>Week 4 saw Michigan take care of business against Penn State while Wisconsin shocked Michigan State. Can Wisconsin pull off another upset in the Big House this Saturday?";
var podcastSix = "Sept. 19, 2016<br>Clemson head coach Dabo Swinney recently added his name to the long list of people who have criticized athletes who are protesting the national anthem. Find out why he--and other coaches and players--would be better off keeping their mouths shut."; 
var podcastSeven = "Sept. 19, 2016<br>Out of all the college football coaches who entered the season on the hot seat, which one will definitely be out at the end of the season?";
var podcastEight = "Sept. 19, 2016<br>Two huge upsets happened in week 3 in college football with Florida State getting smoked by Louisville and Iowa getting shocked at home by FCS powerhouse North Dakota State. Which upset was the biggest?";

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