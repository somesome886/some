const dialogBox = document.getElementById('staring-header-moddle');
const lines = document.querySelectorAll('.staring-moddle-line');

let currentIndex = 0;

function playNext() {
	const currentLine = lines[currentIndex];
	if (currentLine) {
		currentLine.style.display = 'block';
		dialogBox.scrollTop = dialogBox.scrollHeight;
		currentIndex++;
	}
}

setTimeout(() => {
	playNext();
	setInterval(playNext, 2000);
}, 2000);