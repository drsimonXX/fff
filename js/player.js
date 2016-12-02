var podcasts = ["cfb-week-13.mp3",
				"michigan-week-13.mp3",
				"michigan-week-12.mp3",
				"cfb-week-12.mp3",
				"cfb-week-11.mp3",
				"michigan-week-11.mp3",
				"michigan-week-10.mp3",
				"cfb-week-10.mp3"];

var podcastTitle = document.getElementById('podcastTitle');
var podcastSlider = document.getElementById('podcastSlider');
var currentTime = document.getElementById('currentTime');
var duration = document.getElementById('duration');
var volumeSlider = document.getElementById('volumeSlider');
var nextPodcastTitle = document.getElementById('nextPodcastTitle');

var podcastOne = "Dec. 1, 2016<br>Texas, LSU and Oregon have finally made coaching moves. Which programs will be next? Plus, this season's final top 4 is guaranteed to cause a lot of disagreement. Will it be enough to force an 8-team playoff system?";
var podcastTwo = "Nov. 28, 2016<br>Delving into Michigan's 2OT loss to Ohio State, what it means for Michigan's playoff chances and real talk about the future of Michigan's program under Harbaugh. The next podcast is coming after the committee releases its rankings.";
var podcastThree = "Nov. 21, 2016<br>Michigan struggled to beat Indiana with backup QB John O'Korn but got the win. Now all eyes turn to The Game. Now that it's finally here, how does rivalry week feel from a Wolverine's perspective? You might be surprised!";
var podcastFour = "Nov. 20, 2016<br>Two coaches sealed their fates. Louisville and Houston gave everybody one less problem to whine about. Penn State and Michigan State will likely do the same. And the most deserving two-loss team if Washington loses again is...";
var podcastFive = "Nov. 15, 2016<br>How will the cfb playoff committee deal with three out of the four top teams losing in week 11? And can this group of committee members be trusted to get the final four correct?";
var podcastSix = "Nov. 14, 2016<br>Breaking down Michigan's unexpected loss to Iowa and how it affects other B1G teams, as well as the B1G's playoff chances. Also, Jim Harbaugh has yet to prove he deserves a bigger salary than Urban Meyer, Nick Saban and NFL coaches.";
var podcastSeven = "Nov. 7, 2016<br>Michigan was at its best offensively against Maryland, thanks in large part to QB Wilton Speight's improvements. But the defense is showing signs of weakness. Also, I explain why Michigan would have a shot against Alabama.";
var podcastEight = "Nov. 6, 2016<br>Alabama and Ohio State took care of business in week 10. Plus, is the playoff committee overvaluing schedule strength, will Ohio State jump Washington and is this the season that a two-loss team makes the playoff?";
/*var podcastEight = "Nov. 1, 2016<br>What do the week 9 upsets mean for the Big 12's playoff chances, and which top 4 team is most likely to get upset? Also, we know which team will be number one in the playoff committee's first poll, but who is number two?";*/

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
