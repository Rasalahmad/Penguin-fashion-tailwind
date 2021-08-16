document.getElementById('head-button').addEventListener('click', function() {
    const previousText = document.getElementById('be-Penguin-Text');
    const newText = previousText.innerText = 'I am a penguin';
    previousText.style.color = 'green';

});