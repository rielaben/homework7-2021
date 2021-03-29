var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.getElementById....

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// speed by 5% each time the button is clicked and log the new speed to the console.
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.95;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.95;
	console.log("New Speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Original Location " + video.currentTime);
	video.currentTime += 15;
	if (video.currentTime == video.duration){
		video.currentTime = 0;
		console.log("Going back to beginning");
	}
	console.log("New Location " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {

	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Video Muted");
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
		console.log("Video Unmuted");
	}
});

// not working not sure why??
document.querySelector("#slider").addEventListener("click", function() {
	var slider = this.value;
	video.volume = slider/100;
	console.log(video.volume);
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Back to normal");
	video.classList.remove("oldSchool");
});
// volume, playbackrate, etc. look at w3 schools sheet