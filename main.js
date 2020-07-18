window.addEventListener('load', () => {
const sounds = document.querySelectorAll('.sound');
const pads = document.querySelectorAll('.pads div');
const visual = document.querySelector('.visual');
const colors = [
    'lightblue',
    'rgb(48, 236, 227)',
    'plum',
    'peachpuff',
    'royalblue',
    'rgb(178, 123, 230)'
];

console.log(sounds[0]);

// lets going with the sound here
pads.forEach((pad, index) =>{
    pad.addEventListener('click', function() {
        sounds[index].currentTime = 0;
        sounds[index].play();

        createBubbles(index);
    });
});
// create a function that makes bubbles :)
const createBubbles = (index) => {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
}
});



