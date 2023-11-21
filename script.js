//your JS code here. If required.
var section = document.getElementById("buttons")
// alert(section)
section.addEventListener('click', function(e) {
    if(e.target.className === 'btn') {
        var soundName = `/sounds/applause.mp3`;
		// alert(soundName);
		
		const audio = new Audio(soundName);
		audio.play();
		
    }
	// alert(e.target.className)
});