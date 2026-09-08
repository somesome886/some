const dialogBox = document.getElementById('staring-header-moddle');
const lines = document.querySelectorAll('.staring-moddle-line');

let currentIndex = 0;

dialogBox.addEventListener('click', function() {
	const currentLine = lines[currentIndex];
	if (currentLine) {
		currentLine.style.display = 'block';
		dialogBox.scrollTop = dialogBox.scrollHeight;
		currentIndex++;
	}
});